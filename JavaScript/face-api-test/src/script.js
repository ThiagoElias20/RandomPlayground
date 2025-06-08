// This file contains the main JavaScript code for using the Face API. It initializes the Face API, loads models, and handles face detection and recognition.
import '@tensorflow/tfjs-node';

// implements nodejs wrappers for HTMLCanvasElement, HTMLImageElement, ImageData
import * as canvas from 'canvas';

import * as faceapi from 'face-api.js';

const video = document.getElementById('video');
const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');

// Armazenar pessoas cadastradas
let registeredPeople = [];

async function setupCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 720, height: 560 }
    });
    video.srcObject = stream;
    return new Promise((resolve) => {
        video.onloadedmetadata = () => {
            resolve(video);
        };
    });
}

async function loadModels() {
    if (typeof faceapi === 'undefined') {
        console.error('face-api.js não foi carregado corretamente.');
        return;
    }

    console.log('Carregando modelos...');
    const MODEL_URL = 'https://justadudewhohacks.github.io/face-api.js/models';
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
    await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
    console.log('Modelos carregados!');
}

async function detectFaces() {
    const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptors();
    return detections;
}

async function loadImageFromUrl(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('Erro ao carregar imagem'));
        img.src = url;
    });
}

async function getFaceDescriptor(imageUrl) {
    try {
        const img = await loadImageFromUrl(imageUrl);
        
        // Desenhar imagem no canvas
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        
        // Detectar rosto e obter descriptor
        const detection = await faceapi
            .detectSingleFace(canvas, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceDescriptor();
            
        return detection;
    } catch (error) {
        console.error('Erro ao processar imagem:', error);
        return null;
    }
}

async function registerPerson() {
    const name = document.getElementById('personName').value;
    const imageUrl = document.getElementById('imageUrl').value;
    
    if (!name || !imageUrl) {
        alert('Por favor, preencha nome e URL da imagem');
        return;
    }
    
    console.log(`Cadastrando ${name}...`);
    const detection = await getFaceDescriptor(imageUrl);
    
    if (detection) {
        registeredPeople.push({
            name: name,
            descriptor: detection.descriptor,
            imageUrl: imageUrl
        });
        
        console.log(`${name} cadastrado com sucesso!`);
        updateRegisteredPeopleList();
        
        // Limpar campos
        document.getElementById('personName').value = '';
        document.getElementById('imageUrl').value = '';
    } else {
        alert('Não foi possível detectar rosto na imagem');
    }
}

async function searchPerson() {
    const imageUrl = document.getElementById('searchImageUrl').value;
    
    if (!imageUrl) {
        alert('Por favor, insira URL da imagem');
        return;
    }
    
    if (registeredPeople.length === 0) {
        alert('Nenhuma pessoa cadastrada ainda');
        return;
    }
    
    console.log('Buscando pessoa...');
    const detection = await getFaceDescriptor(imageUrl);
    
    if (detection) {
        // Criar face matcher com pessoas cadastradas
        const labeledDescriptors = registeredPeople.map(person => 
            new faceapi.LabeledFaceDescriptors(person.name, [person.descriptor])
        );
        
        const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.6);
        const match = faceMatcher.findBestMatch(detection.descriptor);
        
        const resultDiv = document.getElementById('result');
        if (match.label !== 'unknown') {
            resultDiv.innerHTML = `<h3>Pessoa encontrada: ${match.label}</h3><p>Distância: ${match.distance.toFixed(3)}</p>`;
        } else {
            resultDiv.innerHTML = '<h3>Pessoa não encontrada</h3>';
        }
    } else {
        document.getElementById('result').innerHTML = '<h3>Não foi possível detectar rosto na imagem</h3>';
    }
}

function updateRegisteredPeopleList() {
    const listDiv = document.getElementById('registeredPeople');
    listDiv.innerHTML = registeredPeople.map(person => 
        `<div class="person-item">
            <strong>${person.name}</strong>
            <img src="${person.imageUrl}" alt="${person.name}" style="width: 100px; height: 100px; object-fit: cover; margin-left: 10px;">
        </div>`
    ).join('');
}

// Inicializar quando a página carregar
async function start() {
    try {
        await loadModels();
        console.log('Sistema pronto para uso!');
    } catch (error) {
        console.error('Erro ao inicializar:', error);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
} else {
    start();
}
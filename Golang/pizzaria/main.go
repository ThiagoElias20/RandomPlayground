// main.go is where our projects starts, its MAIN
// go run or go build
// go não tem poo como outras linguagens, não tem herança
// in go everything you import, declare, etc needs to be used.
// go get is like npm install or yarn add

package main

import (
	// "fmt"
	"encoding/json"
	"fmt"
	"os"
	"pizzaria/models"
	"strconv"

	"github.com/gin-gonic/gin"
)

// type Pizza struct { // creating pizza type
// 	ID int `json:"id"` //using json is the json reference that gin will use
// 	// nome string // attributes with only lowercase letters are private
// 	Nome string `json:"nome"`
// 	Preco float64 `json:"preco"`
// }

// var pizzas = []models.Pizza{
// 	{ID: 1, Nome: "Calabresa", Preco: 32.0},
// 	{ID: 2, Nome: "Marguerita", Preco: 35.5},
// 	{ID: 3, Nome: "Bacon", Preco: 37.0},
// } // list

var pizzas []models.Pizza
var people []models.People

func main() {
	// var nomePizzaria string = "Pizzaria Bisi"; // first variable
	// nomePizzaria := "Pizzaria Bisi"; // short assignment
	// instagram, telefone := "@pizzaria", 859752;
	// fmt.Printf("Nome da pizzaria: %s (instagram: %s) - Telefone: %d", nomePizzaria, instagram, telefone); // here its used go interpolators

	// var calabresa Pizza;
	// var pizzas = []Pizza{
	// 	{ID: 1, nome: "Calabresa", preco: 32.0},
	// 	{ID: 2, nome: "Marguerita", preco: 35.5},
	// 	{ID: 3, nome: "Bacon", preco: 37.0},
	// } // list

	// var people = []models.People{
	// 	{ID: 1, Name: "Thiago Elias", Age: 20, Active: true},
	// }
	// fmt.Println("PEOPLE:", people);

	loadPizzas() // will fetch pizzas on json
	loadPeople()

	router := gin.Default();
	router.GET("/pizzas/:id", index);
	router.GET("/pizzas", fetchPizzas);
	router.POST("/pizzas", create);

	router.GET("/welcome", welcome);
	router.GET("/people/:id", indexPeople);
	router.POST("/people", createPeople);
	router.Run()
}

func fetchPizzas(c *gin.Context) {
	c.JSON(200, gin.H{
		"pizzas": pizzas,
	})
}
func create(c *gin.Context) {
	var pizza models.Pizza
	if err := c.ShouldBindJSON(&pizza); err != nil {
		c.JSON(400, gin.H{
			"error": err.Error()})
		return // returned error and stopped function
	}
	pizza.ID = len(pizzas) + 1
	pizzas = append(pizzas, pizza);
	savePizza()
	c.JSON(201, pizza);
}
func index(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam) //transforms string in integer
	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error()})
			return
	}
	for _, p := range pizzas {
		if p.ID == id {
			c.JSON(200, p)
			return
		}
	}
	c.JSON(404, gin.H{"message": "Pizza not found"})
}

func indexPeople(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam) //transforms string in integer
	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error()})
			return
	}
	for _, p := range people {
		if p.ID == id {
			c.JSON(200, p)
			return
		}
	}
	c.JSON(404, gin.H{"message": "Person not found"})
}

func welcome(c*gin.Context) {
	c.JSON(200, "Welcome to go pizzaria!")
}
func createPeople(c*gin.Context) {
	var person models.People
	if err := c.ShouldBindJSON(&person); err != nil {
		c.JSON(400, gin.H{
			"error": err.Error()})
		return
	}
	person.ID = len(people) + 1
	people = append(people, person);
	savePeople()
	c.JSON(201, person);
}

func loadPizzas() {
	file, err := os.Open("data/pizzas.json")
	if err != nil {
		fmt.Println("Error on file json:", err)
		return
	}
	defer file.Close() // last instrunction before function ending
	decoder := json.NewDecoder(file);
	if err := decoder.Decode(&pizzas); err != nil {
		fmt.Println("Error decoding JSON:", err);
	} // & is for the memory addres of pizzas
}

func loadPeople() {
	file, err := os.Open("data/people.json")
	if err != nil {
		fmt.Println("Error on file json:", err)
		return
	}
	defer file.Close() // last instrunction before function ending
	decoder := json.NewDecoder(file);
	if err := decoder.Decode(&people); err != nil {
		fmt.Println("Error decoding JSON:", err);
	} // & is for the memory addres of pizzas
}

func savePizza() {
	file, err := os.Create("data/pizzas.json")
	if err != nil {
		fmt.Println("Error on file json:", err)
		return
	}
	defer file.Close()

	encoder := json.NewEncoder(file)
	if err := encoder.Encode(pizzas); err != nil {
		fmt.Println("Error encoding JSON:", err);
	}
}

func savePeople() {
	file, err := os.Create("data/people.json")
	if err != nil {
		fmt.Println("Error on file json:", err)
		return
	}
	defer file.Close()

	encoder := json.NewEncoder(file)
	if err := encoder.Encode(people); err != nil {
		fmt.Println("Error encoding JSON:", err);
	}
}

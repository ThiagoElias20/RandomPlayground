// main.go is where our projects starts, its MAIN
// go run or go build
// go não tem poo como outras linguagens, não tem herança
// in go everything you import, declare, etc needs to be used.
// go get is like npm install or yarn add

package main

import (
	// "fmt"
	"pizzaria/models"
	"github.com/gin-gonic/gin"
)

// type Pizza struct { // creating pizza type
// 	ID int `json:"id"` //using json is the json reference that gin will use
// 	// nome string // attributes with only lowercase letters are private
// 	Nome string `json:"nome"`
// 	Preco float64 `json:"preco"`
// }

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

	router := gin.Default();
	router.GET("/pizzas", getPizzas);
	router.Run()
}

func getPizzas(c*gin.Context) {
	var pizzas = []models.Pizza{
		{ID: 1, Nome: "Calabresa", Preco: 32.0},
		{ID: 2, Nome: "Marguerita", Preco: 35.5},
		{ID: 3, Nome: "Bacon", Preco: 37.0},
	} // list
	c.JSON(200, gin.H{
		"pizzas": pizzas,
	})
}

// main.go is where our projects starts, its MAIN
// go run or go build
// go não tem poo como outras linguagens, não tem herança
// in go everything you import, declare, etc needs to be used.
// go get is like npm install or yarn add

package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
)

type Pizza struct { // creating pizza type
	ID int
	nome string
	preco float64
}

func main() {
	// var nomePizzaria string = "Pizzaria Bisi"; // first variable
	// nomePizzaria := "Pizzaria Bisi"; // short assignment
	// instagram, telefone := "@pizzaria", 859752;
	// fmt.Printf("Nome da pizzaria: %s (instagram: %s) - Telefone: %d", nomePizzaria, instagram, telefone);

	// var calabresa Pizza;
	var pizzas = []Pizza{
		{ID: 1, nome: "Calabresa", preco: 32.0},
		{ID: 2, nome: "Marguerita", preco: 35.5},
		{ID: 3, nome: "Bacon", preco: 37.0},
	} // list
	fmt.Println(pizzas);

	router := gin.Default();
	router.GET("/pizzas", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"pizzas": "Toscana, Calabresa",
		})
	})
	router.Run()
}

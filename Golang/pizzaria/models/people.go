package models

type People struct {
	ID int `json:"id"`
	Name string `json:"name"`
	Age int `json:"age"`
	Active bool `json:"active"`
}
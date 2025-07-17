package models

type Pizza struct { // creating pizza type
	ID int `json:"id"` //using json is the json reference that gin will use
	// nome string // attributes with only lowercase letters are private
	Nome string `json:"nome"`
	Preco float64 `json:"preco"`
}
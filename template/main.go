package main

import (
	"fmt"
	"html/template"
	"os"
)

// declaring struct
type Student struct {
	Name  string
	Marks int
	Id    string
}

func main() {

	// defining struct instance
	std1 := Student{"Vani", 94, "20024"}

	// Parsing the required html
	// file in same directory
	t, err := template.ParseFiles("index.tmpl")

	// standard output to print merged data
	err = t.Execute(os.Stdout, std1)
	fmt.Println(err)
}

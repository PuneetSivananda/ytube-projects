package main

import (
	"html/template"
	"log"
	"os"
)

type Student struct {
	Name  string
	Marks int
	Id    string
	Title string
}

func main() {

	// cli starts here

	std1 := Student{
		"Vani", 94, "20024", "FastQC Filename",
	}

	// Parsing the required html
	// file in same directory
	t, err := template.ParseFiles("index.html")

	f, err := os.Create("output.html")
	if err != nil {
		log.Println("Create file Error:", err)
		return
	}
	defer f.Close()

	err = t.Execute(f, std1)
	if err != nil {
		log.Println("Template Write Error:", err)
		return
	}
}

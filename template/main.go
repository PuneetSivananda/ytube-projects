package main

import (
	"html/template"
	"log"
	"os"

	"github.com/sirupsen/logrus"
)

type State int64

const (
	Good State = iota
	Bad
	Error
	None
)

type Student struct {
	Name        string
	Marks       int
	Id          string
	Title       string
	DeviceState State
}

func (s State) EnumIndex() int {
	return int(s)
}
func (s State) String() string {
	return [...]string{"Good", "Bad", "Error", "None"}[s-1]
}

// type Template struct {
// }

// func NewTemplate() (*Template, error) {
// 	return nil, nil
// }

func main() {

	// cli starts here

	var deviceState State = Bad
	std1 := Student{
		"Vani", 94, "20024", "FastQC Filename", deviceState,
	}

	// Parsing the required html
	// file in same directory
	t, err := template.ParseFiles("index.html")
	if err != nil {
		logrus.Info(err)
	}

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

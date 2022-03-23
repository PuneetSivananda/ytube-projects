package main

import (
	"cli-toolset/colors"
	"flag"
	"fmt"
	"log"
	"os"
	"strconv"
)

func main() {
	flag.Usage = func() {
		fmt.Fprintf(flag.CommandLine.Output(), "usage: %s -chr [no] -start [pos] -end [pos]\n", os.Args[0])
		flag.PrintDefaults()
	}
	age := flag.Int("age", 0, "age of the person")
	place := flag.String("place", "", "Place a person is born")
	c := &colors.Colors{Clr: colors.ColorGreen}
	flag.Parse()

	//Check flgs here:
	if len(os.Args) < 2 {
		log.Fatalf("error: wrong number of arguments")
	}
	//build options list here:
	strAge := strconv.Itoa(*age)
	c.Colorize(*place + strAge)
	//Start flow here
}

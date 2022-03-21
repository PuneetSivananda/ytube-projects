package main

import (
	"cli-toolset/colors"
	"flag"
	"fmt"
	"log"
	"os"
)

func main() {
	flag.Usage = func() { // [1]
		fmt.Fprintf(flag.CommandLine.Output(), "usage: %s cmd1|cmd2\n", os.Args[0])
		flag.PrintDefaults()
	}
	c := &colors.Colors{Clr: colors.ColorGreen}
	flag.Parse()

	if len(os.Args) < 2 {
		log.Fatalf("error: wrong number of arguments")
	}

	switch os.Args[1] {
	case "run":
		c.Colorize("here")
		return
	}
}

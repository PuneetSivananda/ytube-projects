package main

import (
	"cli-toolset/colors"
	"flag"
)

func main() {
	check := flag.String("msg", "Default", "Display colorized output")
	check1 := flag.String("msg1", "Default", "Display colorized output")
	c := &colors.Colors{Clr: colors.ColorGreen}
	flag.Parse()
	if *check != "" {
		c.Colorize(*check)
	}
	if *check1 != "" {
		c.Colorize(*check1)
	}

}

package main

import (
	"cli-toolset/colors"
	"flag"
)

func main() {
	useColor := flag.Bool("color", false, "Display colorized output")
	// c := &colors.Color{clr: colors.ColorBlue}
	c := &colors.Colors{Clr: colors.ColorGreen}
	flag.Parse()
	if *useColor {
		c.Colorize("This is the Color String")
		return
	}

}

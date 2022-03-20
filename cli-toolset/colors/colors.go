package colors

import (
	"fmt"
)

type Colors struct {
	Clr string
}

type Color string

const (
	ColorBlack  Color = "\u001b[30m"
	ColorRed          = "\u001b[31m"
	ColorGreen        = "\u001b[32m"
	ColorYellow       = "\u001b[33m"
	ColorBlue         = "\u001b[34m"
	ColorReset        = "\u001b[0m"
)

func (c *Colors) Colorize(message string) {
	fmt.Println(string(c.Clr), message, string(ColorReset))
}

type iColor interface {
	colorize(color Color, message string)
}

func main() {
	color := Colors{Clr: ColorBlue}
	color.Colorize("Hello, World")
}

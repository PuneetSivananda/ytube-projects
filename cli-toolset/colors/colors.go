package colors

import (
	"fmt"
)

type Colors struct {
	color string
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

func (c *Colors) colorize(message string) {
	fmt.Println(string(c.color), message, string(ColorReset))
}

type iColor interface {
	colorize(color Color, message string)
}

func main() {
	color := Colors{color: ColorGreen}
	color.colorize("Hello, World")
}

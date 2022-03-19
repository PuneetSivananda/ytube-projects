package main

import (
	"errors"
	"flag"
	"fmt"
	"os"
)

// Colorizing package
type Color string

const (
	ColorBlack  Color = "\u001b[30m"
	ColorRed          = "\u001b[31m"
	ColorGreen        = "\u001b[32m"
	ColorYellow       = "\u001b[33m"
	ColorBlue         = "\u001b[34m"
	ColorReset        = "\u001b[0m"
)

func colorize(color Color, message string) {
	fmt.Println(string(color), message, string(ColorReset))
}

func NewGreetCommand() *GreetCommand {
	gc := &GreetCommand{
		fs: flag.NewFlagSet("greet", flag.ContinueOnError),
	}
	gc.fs.StringVar(&gc.name, "name", "World", "name of the persone to be greeted")
	gc.fs.StringVar(&gc.age, "age", "23", "name the age of the person")
	return gc
}

type GreetCommand struct {
	fs   *flag.FlagSet
	name string
	age  string
}

func (g *GreetCommand) Name() string {
	return g.fs.Name()
}

func (g *GreetCommand) Init(args []string) error {
	return g.fs.Parse(args)
}

func (g *GreetCommand) RunAge() error {
	fmt.Println(g.age)
	msgString := "Age is :=> " + g.age + "!"
	colorize(ColorRed, msgString)
	// fmt.Println("Hello ", g.name, "!")
	return nil
}

func (g *GreetCommand) Run() error {
	msgString := "Hello " + g.name + "!"
	colorize(ColorBlue, msgString)
	// fmt.Println("Hello ", g.name, "!")
	return nil
}

type Runner interface {
	Init([]string) error
	Run() error
	Name() string
	RunAge() error
}

func root(args []string) error {
	if len(args) < 1 {
		return errors.New("you must pass a subcommand")
	}

	cmds := []Runner{
		NewGreetCommand(),
	}

	subcommand := os.Args[1]
	for _, cmd := range cmds {
		if subcommand == "-word" {
			fmt.Println(cmd)
			return cmd.RunAge()
		}
		if cmd.Name() == subcommand {
			cmd.Init(os.Args[2:])
			return cmd.Run()
		}

	}

	return fmt.Errorf("unknown subcommand: %s", subcommand)
}

func main() {
	if err := root(os.Args[1:]); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}

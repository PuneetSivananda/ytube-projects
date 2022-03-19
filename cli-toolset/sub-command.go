package main

import (
	"flag"
	"fmt"
	"os"
)

func NewGreetCommand() *GreetCommand {
	gc := &GreetCommand{
		fs: flag.NewFlagSet("greet", flag.ContinueOnError),
	}
	gc.fs.StringVar(&gc.name, "name", "World", "name of the persone to be greeted")
	return gc
}

type GreetCommand struct {
	fs   *flag.FlagSet
	name string
}

func (g *GreetCommand) Name() string {
	return g.fs.Name()
}

func root(args []string) error {
	return fmt.Errorf("Unknown subcommand: %s", "Failed")
}

func main() {
	if err := root(os.Args[1:]); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}

package main

import (
	"fmt"
	"os"

	"github.com/sirupsen/logrus"
	"github.com/urfave/cli/v2"
)

var (
	oper     string
	op1, op2 int
)

func main() {
	app := cli.NewApp() //&cli.App()
	app.Name = "MyCalc"
	app.Usage = "A fast calc app in the terminal."
	app.Description = "A Longer desription for a terminal calculater that can be used in the terminal."

	app.Authors = []*cli.Author{
		{Name: "Puneet Sivananda", Email: "puneet.sivananda@gmail.com"},
	}
	app.Flags = []cli.Flag{
		&cli.StringFlag{Destination: &oper, Name: "oper", Value: "add", Usage: "add, sub, mul, or div operation on two int operands"},
		&cli.IntFlag{Destination: &op1, Name: "op1", Value: 0, Usage: "operand 1 for operation"},
		&cli.IntFlag{Destination: &op2, Name: "op2", Value: 0, Usage: "operand 2 for operation"},
	}

	app.Commands = []*cli.Command{
		addCommand(),
	}

	app.Action = mainAction

	if err := app.Run(os.Args); err != nil {
		logrus.Error(err)
	}
}

func addCommand() *cli.Command {
	return &cli.Command{
		Name:    "add",
		Aliases: []string{"a"},
		Action: func(ctx *cli.Context) error {
			res := op1 + op2
			fmt.Printf("%v + %v = %v\n", op1, op2, res)
			return nil
		},
	}
}

func mainAction(ctx *cli.Context) error {
	// flag.Parse()
	/*
		switch oper {
		case "add":

		case "sub":
			res := op1 - op2
			fmt.Printf("%v - %v = %v\n", op1, op2, res)
		case "mul":
			res := op1 * op2
			fmt.Printf("%v * %v = %v\n", op1, op2, res)
		case "div":
			if op2 == 0 {
				return fmt.Errorf("op2 is equal to 0, can't divid by 0")
			}
			res := op1 / op2
			fmt.Printf("%v / %v = %v\n", op1, op2, res)
		}
	*/
	return nil
}

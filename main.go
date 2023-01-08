package main

import (
	"fmt"
	"os"
	"strconv"

	"github.com/sirupsen/logrus"
	"github.com/urfave/cli/v2"
)

func main() {
	app := cli.NewApp() //&cli.App()
	app.Name = "MyCalc"
	app.Usage = "A fast calc app in the terminal."
	app.Description = "A Longer desription for a terminal calculater that can be used in the terminal."

	app.Authors = []*cli.Author{
		{Name: "Puneet Sivananda", Email: "puneet.sivananda@gmail.com"},
	}

	app.Commands = []*cli.Command{
		addCommand(),
		subCommand(),
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
			n := ctx.NArg()
			if n == 0 {
				logrus.Error("no arguments provided for add operation")
				cli.ShowAppHelp(ctx)
				return nil
			}
			a := ctx.Args().Get(0)
			res, _ := strconv.Atoi(a)
			fmt.Printf("%v", res)

			for i := 1; i < n; i++ {
				a = ctx.Args().Get(i)
				op, _ := strconv.Atoi(a)
				res += op
				fmt.Printf(" + %v", op)
			}
			fmt.Printf(" = %v\n", res)

			return nil
		},
	}
}

func subCommand() *cli.Command {
	return &cli.Command{
		Name:    "sub",
		Aliases: []string{"s"},
		Action: func(ctx *cli.Context) error {
			n := ctx.NArg()
			if n == 0 {
				logrus.Error("no arguments provided for add operation")
				cli.ShowAppHelp(ctx)
				return nil
			}
			a := ctx.Args().Get(0)
			res, _ := strconv.Atoi(a)
			fmt.Printf("%v", res)

			for i := 1; i < n; i++ {
				a = ctx.Args().Get(i)
				op, _ := strconv.Atoi(a)
				res -= op
				fmt.Printf(" - %v", op)
			}
			fmt.Printf(" = %v\n", res)

			return nil
		},
	}
}

func mainAction(ctx *cli.Context) error {
	cli.ShowAppHelp(ctx)
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

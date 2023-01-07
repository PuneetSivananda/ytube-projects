package main

import (
	"flag"
	"fmt"
	"os"

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
	app.Run(os.Args)
}

func oldMain() {
	flag.StringVar(&oper, "oper", "add", "add, sub, mul, or div operation on two int operands")
	flag.IntVar(&op1, "op1", 0, "operand 1 for operation")
	flag.IntVar(&op2, "op2", 0, "operand 2 for operation")
	flag.Parse()

	switch oper {
	case "add":
		res := op1 + op2
		fmt.Printf("%v + %v = %v\n", op1, op2, res)
	case "sub":
		res := op1 - op2
		fmt.Printf("%v - %v = %v\n", op1, op2, res)
	case "mul":
		res := op1 * op2
		fmt.Printf("%v * %v = %v\n", op1, op2, res)
	case "div":
		if op2 == 0 {
			fmt.Printf("op2 is equal to 0, can't divid by 0")
			return
		}
		res := op1 / op2
		fmt.Printf("%v / %v = %v\n", op1, op2, res)
	}
}

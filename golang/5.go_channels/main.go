package main

import "fmt"

func SendValue(c chan int) {
	c <- 9
}

func main() {
	fmt.Println("Channels Tutorial")
	values := make(chan int)
	defer close(values)

}

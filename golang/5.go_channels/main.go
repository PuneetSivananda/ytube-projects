package main

import (
	"fmt"
	"time"
)

func SendValue(c chan string) {
	fmt.Println("Executin Goroutine")
	time.Sleep(1 * time.Second)
	c <- "Hello World"
	fmt.Println("Finished Executin Goroutine")
}

func main() {
	fmt.Println("Channels Tutorial")
	values := make(chan string, 2) //buffered channels
	defer close(values)

	go SendValue(values)
	go SendValue(values)
	value := <-values

	fmt.Println(value)

	time.Sleep(1 * time.Second)

}

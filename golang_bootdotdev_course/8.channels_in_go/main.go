package main

import "fmt"

func foo(c chan int, someValue int) {
	c <- someValue * 5
}

func main() {
	fooVal := make(chan int)
	for i := 0; i < 10; i++ {
		foo(fooVal, i)
	}

	
}

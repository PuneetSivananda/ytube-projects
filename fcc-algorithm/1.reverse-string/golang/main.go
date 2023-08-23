package main

import "fmt"

func main() {
	reverseString := "hello"
	reversedString := ""
	for i := len(reverseString); i > 0; i-- {
		reversedString = reversedString + string(reverseString[i-1])
	}
	fmt.Println(reversedString)
}

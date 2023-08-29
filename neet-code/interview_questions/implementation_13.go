// You can edit this code!
// Click here and start typing.
package main

import "fmt"

func isValid(s string) bool {
	world := map[string]string{
		"{": "}",
		"(": ")",
		"[": "]",
	}

	top := len(s) - 1

	// these do the looping
	// how about we do them manually and check for the values

	// make into 2 arrayss
	// check each element of 2 arrays are complements if yes
	// 	proceed
	// else return false
	// when len = 0
	// return true

	// for each item in string if opening braces push to stack
	// if ch is a closing pop from stack
	// if stack empty true else false

	var a1 []string
	var a2 []string
	for i := 0; i < len(s)/2; i++ {
		a1 = append(a1, string(s[i]))
	}

	for j := top; j >= len(s)/2; j-- {
		a2 = append(a2, string(s[j]))
	}

	for k := 0; k < len(a1); k++ {
		if world[string(a1[k])] != string(a2[k]) {
			return false
		}

	}
	return true
}

func main() {
	s1 := "[({})]"
	// s2 := "([)]"
	fmt.Println(isValid(s1))
	// fmt.Println(isValid(s2))

}

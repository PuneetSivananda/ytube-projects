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
	fmt.Println(world)

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
		//fmt.Println(string(s[i]), string(s[j]))
		//fmt.Println(world[string(s[i]))
		// fmt.Println(string(s[i]), string(s[j]), world[string(s[i])])
		// if world[string(s[i])] == string(s[j]) {
		// i = i + 1
		// j = j - 1
		//	fmt.Println("match")
		//	fmt.Println(i, j)
	}

	for j := top; j >= len(s)/2; j-- {
		a2 = append(a2, string(s[j]))
	}
	for k := 0; k < len(a1); k++ {
		fmt.Println(a1[k])
		fmt.Println(a2[k])
	}
	return false
}

func main() {
	s1 := "[({})]"
	//s2 := "([)]"
	fmt.Println(isValid(s1))
	//	fmt.Println(isValid(s2))

}

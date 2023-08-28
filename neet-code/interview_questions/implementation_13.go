// You can edit this code!
// Click here and start typing.
package main

import "fmt"

func isValid(s string) bool {
	// world := map[string]string{
	// 	"{": "}",
	// 	"(": ")",
	// 	"[": "]",
	// }

	top := len(s) - 1
	for i := 0; i < len(s)/2; i++ {
		//check the val and map result
		for j := top; j >= len(s)/2; j-- {
			fmt.Println(i, j)
			//fmt.Println(string(s[i]), string(s[j]))
			//fmt.Println(world[string(s[i]))
			// fmt.Println(string(s[i]), string(s[j]), world[string(s[i])])
			// if world[string(s[i])] == string(s[j]) {
			// i = i + 1
			// j = j - 1
			//	fmt.Println("match")
			//	fmt.Println(i, j)
		}
	}
	return false
}

func main() {
	s1 := "[({})]"
	//s2 := "([)]"
	fmt.Println(isValid(s1))
	//	fmt.Println(isValid(s2))

}

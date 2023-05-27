package main

import "fmt"

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	string_count := make(map[rune]int)
	for _, ch := range s {
		string_count[ch]++
	}

	for _, ch := range t {
		string_count[ch]--
		if string_count[ch] < 0 {
			return false
		}
	}

	for _, count := range string_count {
		if count != 0 {
			return false
		}
	}

	return true
}

func main() {
	var stringA string
	var stringB string
	fmt.Println("Enter First String:")
	fmt.Scanln(&stringA)
	fmt.Println("Enter Second String:")
	fmt.Scanln(&stringB)

	fmt.Println(isAnagram(stringA, stringB))
}

package main

import (
	"fmt"
)

// Brute force the two strings
// sort them and check if they are equal

func main() {
	// Define the two strings
	str1 := "cat"
	str2 := "act"

	// Convert the strings to arrays of runes
	runes1 := []rune(str1)
	runes2 := []rune(str2)

	// Create a map to store the frequency of each rune in the first string
	charCountMap1 := make(map[rune]int)
	for _, char := range runes1 {
		charCountMap1[char]++
	}

	// Create a map to store the frequency of each rune in the second string
	charCountMap2 := make(map[rune]int)
	for _, char := range runes2 {
		charCountMap2[char]++
	}

	// Check if the two maps are equal
	if len(charCountMap1) != len(charCountMap2) {
		fmt.Println("The two strings are not anagrams")
		return
	}

	for char, count1 := range charCountMap1 {
		count2, ok := charCountMap2[char]
		if !ok || count1 != count2 {
			fmt.Println("The two strings are not anagrams")
			return
		}
	}

	// The two strings are anagrams
	fmt.Println("The two strings are anagrams")

}

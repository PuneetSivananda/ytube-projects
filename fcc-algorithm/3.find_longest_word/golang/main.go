package main

import (
	"fmt"
	"strings"
)

func findLongestWord(sentence string) int {
	MAX := 0
	words := strings.Split(sentence, " ")
	for word := 0; word < len(words); word++ {
		if len(words[word]) > MAX {
			MAX = len(words[word])
		}
	}
	return MAX
}

func main() {
	fmt.Println(findLongestWord("The quick brown fox jumped over the lazy dog"))
}

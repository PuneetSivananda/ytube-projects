package main

import "fmt"

type Map struct {
	m map[rune]interface{}
}

func NewMap() *Map {
	m := &Map{}
	m.m = make(map[rune]interface{})
	return m
}

func (m *Map) Add(key rune, value int) {
	m.m[key] = value
}

func (m *Map) Remove(value rune) {
	delete(m.m, value)
}

func (m *Map) Contains(value rune) bool {
	_, c := m.m[value]
	return c
}

func isAnagram(str1, str2 string) bool {
	m := NewMap()
	fmt.Println(m)
	return false
}
func main() {
	result := isAnagram("nagaram", "anagram")
	fmt.Println(result)
}

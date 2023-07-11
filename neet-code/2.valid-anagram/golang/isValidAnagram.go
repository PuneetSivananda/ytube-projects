package main

import (
	"fmt"
)

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

// Gets the value from the hash
func (m *Map) Contains(key rune) bool {
	value, _ := m.m[key]
	if value != nil {
		return true
	} else {
		return false
	}
}

func (m *Map) Get(key rune) (value interface{}, c bool) {
	value, c = m.m[key]
	if value == nil {
		return 0, false
	}
	return
}

func getZeroOrOne(b bool) int {
	if b {
		return 1
	} else {
		return 0
	}
}

func isAnagram(str1, str2 string) bool {
	if len(str1) != len(str2) {
		return false
	}
	countS1 := NewMap()
	countS2 := NewMap()
	for _, s := range str1 {
		countS1.Add(s, 1+getZeroOrOne(countS1.Contains(s)))
	}
	for _, t := range str2 {
		countS2.Add(t, 1+getZeroOrOne(countS2.Contains(t)))
	}

	for k, _ := range countS2.m {
		_, k1 := countS2.Get(k)
		_, k2 := countS1.Get(k)
		if k1 != k2 {
			return false
		}
	}
	return true
}

func main() {
	result := isAnagram("nagaram", "anagram")
	fmt.Println(result)
}

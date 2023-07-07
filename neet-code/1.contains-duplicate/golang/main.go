package main

import (
	"fmt"
)

/**
 Create a Set structure in Golang
 Add ability to Add, Remove and Contains functionality to the Set structure

	implement the logic using:
		for every number in nums
		if num is present in the hashmap return True
			stop
		else
			add the num to the hashmap

		end of for loop return False
*/

type set struct {
	m map[int]interface{}
}

var exists = struct{}{}

func NewSet() *set {
	s := &set{}
	s.m = make(map[int]interface{})
	return s
}

func (s *set) Add(value int) {
	s.m[value] = exists
}

func (s *set) Remove(value int) {
	delete(s.m, value)
}

func (s *set) Contains(value int) bool {
	_, c := s.m[value]
	return c
}

func main() {
	s := NewSet()
	var nums = []int{2, 1, 3, 2}
	flag := false
	for _, num := range nums {
		if s.Contains(num) {
			flag = true
			break
		}
		s.Add(num)
	}
	fmt.Println(flag)
}

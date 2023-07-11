package main

import "fmt"

type Map struct {
	m map[int]int
}

func NewMap() *Map {
	m := &Map{}
	m.m = make(map[int]int)
	return m
}

func (m *Map) Add(key int, value int) {
	m.m[key] = value
}

func (m *Map) Remove(value int) {
	delete(m.m, value)
}

func (m *Map) Contains(key int) bool {
	value, _ := m.m[key]
	if value != 0 {
		return true
	} else {
		return false
	}
}

func (m *Map) Get(key int) (value interface{}, c bool) {
	value, c = m.m[key]
	if value == nil {
		return 0, false
	}
	return
}

func twoSum(nums []int, target int) bool {
	m := NewMap()
	for k, v := range nums {
		diff := target - v
		if m.Contains(diff) {
			val, _ := m.Get(diff)
			fmt.Println(val)
		}
		m.Add(v, k)
	}
	fmt.Println(m)
	return false
}

func main() {
	twoSum([]int{1, 4, 5, 4}, 5)
}

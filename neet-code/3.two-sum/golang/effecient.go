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
	_, status := m.m[key]
	if status {
		return true
	} else {
		return false
	}
}

func (m *Map) Get(key int) (value int, c bool) {
	value, c = m.m[key]
	return
}

func twoSum(nums []int, target int) (val1 int, val2 int) {
	m := NewMap()
	for k, v := range nums {
		diff := target - v
		if m.Contains(diff) {
			val, _ := m.Get(diff)
			return val, k
		}
		m.Add(v, k)
	}
	return -1, -1
}

func main() {
	var1, var2 := twoSum([]int{1, 2, 3, 4}, 5)
	fmt.Println(var1, var2)
}

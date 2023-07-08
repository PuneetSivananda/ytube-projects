package main

type Map struct {
	m map[rune]interface{}
}

var exists = struct{}{}

func NewMap() *Map {
	s := &Map{}
	s.m = make(map[rune]interface{})
	return s
}

func (s *Map) Add(value rune) {
	s.m[value] = exists
}

func (s *Map) Remove(value rune) {
	delete(s.m, value)
}

func (s *Map) Contains(value rune) bool {
	_, c := s.m[value]
	return c
}

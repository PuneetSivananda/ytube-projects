package main

import (
	"fmt"
	"sort"
)

type Node struct {
	Value int
	Color string
	Next  *Node
}

type LinkedList struct {
	Head *Node
}

func NewLinkedList() *LinkedList {
	return &LinkedList{Head: nil}
}

func (l *LinkedList) Add(value int, color string) {
	newNode := &Node{Value: value, Color: color, Next: nil}

	if l.Head == nil {
		l.Head = newNode
	} else {
		currentNode := l.Head
		for currentNode.Next != nil {
			currentNode = currentNode.Next
		}
		currentNode.Next = newNode
	}
}

func (l *LinkedList) Sort() {
	if l.Head == nil {
		return
	}

	nodes := make([]*Node, 0)
	currentNode := l.Head
	for currentNode != nil {
		nodes = append(nodes, currentNode)
		currentNode = currentNode.Next
	}

	sort.Slice(nodes, func(i, j int) bool {
		return nodes[i].Value < nodes[j].Value
	})

	for i := 0; i < len(nodes)-1; i++ {
		nodes[i].Next = nodes[i+1]
	}
	nodes[len(nodes)-1].Next = nil

	l.Head = nodes[0]
}

func main() {
	list := NewLinkedList()
	list.Add(1, "red")
	list.Add(4, "green")
	list.Add(5, "green")
	list.Add(3, "red")
	list.Add(6, "green")

	list.Sort()

	for currentNode := list.Head; currentNode != nil; currentNode = currentNode.Next {
		fmt.Println(currentNode.Value, currentNode.Color)
	}
}

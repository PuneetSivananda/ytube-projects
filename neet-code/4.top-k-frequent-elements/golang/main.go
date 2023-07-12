package main

import "fmt"

func printTopK(nums []int, k int) int {
	m := make(map[int]int)
	m[1] = 2
	for k, v := range m {
		fmt.Println(k, v)
	}
	for _, value := range nums {
		fmt.Println(value)
	}
	return 0
}

func main() {
	res := printTopK([]int{1, 1, 1, 2, 2, 4, 4, 4, 3}, 2)
	fmt.Println(res)
}

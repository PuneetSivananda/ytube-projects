package main

import "fmt"

func printTopK(nums []int, k int) int {
	count := make(map[int]int)
	freq := [][]int{}
	for i := 0; i <= len(nums)+1; i++ {
		freq = append(freq, []int{})
	}
	fmt.Println(count)
	for _, value := range nums {
		count[value]++
	}
	fmt.Println(count)
	for k, v := range count {
		fmt.Println(k, v)
	}
	return 0
}

func main() {
	res := printTopK([]int{1, 1, 1, 2, 2, 4, 4, 4, 3}, 2)
	fmt.Println(res)
}

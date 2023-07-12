package main

import "fmt"

func printTopK(nums []int, k int) []int {
	count := make(map[int]int)
	freq := [][]int{}
	for i := 0; i <= len(nums)+1; i++ {
		freq = append(freq, []int{})
	}
	for _, value := range nums {
		count[value]++
	}
	for k, v := range count {
		freq[v] = append(freq[v], k)
	}

	res := make([]int, 0)
	for i := len(freq) - 1; i >= 0 && len(res) < k; i-- {
		for _, n := range freq[i] {
			res = append(res, n)
			// if len(res) == k {
			// 	fmt.Println(res)
			// 	return res
			// }
		}

	}
	return res
}

func main() {
	res := printTopK([]int{1, 1, 1, 2, 2, 4, 4, 4, 3}, 2)
	fmt.Println(res)
}

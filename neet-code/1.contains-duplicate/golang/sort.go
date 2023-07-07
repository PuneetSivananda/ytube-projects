package main

import (
	"fmt"
	"sort"
)

func main() {
	var nums = []int{2, 1, 3, 2}
	sort.Ints(nums)
	for _, v := range nums {
		for _, k := range nums {
			fmt.Println(v, k)
		}
	}
}

package main

import (
	"fmt"
	"sort"
)

func main() {
	var nums = []int{2, 1, 3, 2}
	sort.Ints(nums)
	foundDuplicate := false
	for i := 0; i < len(nums); i++ {
		for j := 0; j < i; j++ {
			if nums[i] == nums[j] {
				foundDuplicate = true
				break
			}
		}
	}
	fmt.Println(foundDuplicate)
}

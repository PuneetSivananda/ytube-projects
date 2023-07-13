package main

import "fmt"

func product_array_except_self(nums []int) []int {
	var res []int
	for i := 0; i < len(nums); i++ {
		res = append(res, 1)
	}
	prefix := 1
	for i := 0; i < len(nums); i++ {
		res[i] = prefix
		prefix = prefix * nums[i]
	}
	postfix := 1
	for i := len(nums) - 1; i >= 0; i-- {
		res[i] *= postfix
		postfix *= nums[i]
	}
	return res
}

func main() {
	fmt.Println("Product array except self")
	input := []int{1, 2, 3, 4}
	result := product_array_except_self(input)
	fmt.Println(input)
	fmt.Println(result)
}

package main

import "fmt"

func product_array_except_self(nums []int) {
	fmt.Println(nums)
	var res []int
	for i := 0; i < len(nums); i++ {
		res = append(res, 1)
	}
	prefix := 1
	fmt.Println(prefix)
	for i := 0; i < len(nums); i++ {
		res[i] = prefix
		prefix = prefix * nums[i]
	}
	fmt.Println(prefix)
	fmt.Println(res)
}

func main() {
	fmt.Println("Product array except self")
	product_array_except_self([]int{1, 2, 3, 4})
}

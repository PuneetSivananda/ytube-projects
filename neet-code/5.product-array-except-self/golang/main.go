package main

import "fmt"

func product_array_except_self(nums []int) {
	fmt.Println(nums)
}

func main() {
	fmt.Println("Product array except self")
	product_array_except_self([]int{1, 2, 3, 4})
}

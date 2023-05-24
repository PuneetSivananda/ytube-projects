package main

import "fmt"

func containsDuplicate(arr []int) bool {
	// get counts of each item in array
	counts := make(map[int]int)

	for _, num := range arr {
		counts[num]++
		if counts[num] > 1 {
			return true
		}
	}
	return false
}

func main() {
	var size int
	fmt.Println("Enter the size of the array:")
	fmt.Scanln(&size)
	var inputArray = make([]int, size)
	for i := 0; i < size; i++ {
		fmt.Printf("Enter element %d:\n", i)
		fmt.Scanf("%d", &inputArray[i])
	}

	var setBool bool = false
	setBool = containsDuplicate(inputArray)
	fmt.Println(setBool)
}

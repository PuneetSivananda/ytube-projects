package main

import "fmt"

func findElementInArray(arr []int, elem int) bool {
	for i := 0; i < len(arr); i++ {
		if elem == arr[i] {
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
	for _, elem := range inputArray {
		setBool = findElementInArray(inputArray, elem)
		fmt.Println(setBool)
	}
}

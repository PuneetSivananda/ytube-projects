package main

import "fmt"

/**
 Create a Set structure in Golang
 Add ability to Add, Remove and Contains functionality to the Set structure

	implement the logic using:
		for every number in nums
		if num is present in the hashmap return True
			stop
		else
			add the num to the hashmap

		end of for loop return False
*/

func main() {
	s := make(map[string]interface{})
	var exists = struct{}{}
	s["James"] = exists
	for v := range s {
		fmt.Println(v)
	}
}

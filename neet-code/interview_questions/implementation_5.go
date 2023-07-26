package main

import "fmt"

//{a,b,c,d}

//{a,c,h,f}
//b,d,h,f

func main() {
	arr1 := []string{"a", "b", "c", "d"}

	arr2 := []string{"a", "c", "h", "f"}

	var res []string

	for i := 0; i <= len(arr1)-1; i++ {
		for j := 0; j <= len(arr2)-1; j++ {
			if arr1[i] != arr2[j] && arr2[j] != arr1[i] {
				res = append(res, arr2[j])
			}
		}
	}
	fmt.Println(res)

}

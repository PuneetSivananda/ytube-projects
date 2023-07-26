package main

import "fmt"

//{a,b,c,d}

//{a,c,h,f}
//b,d,h,f
func isPresent(a string, b []string) bool {
	for _, item := range b {
		if item == a {
			return true
		}
	}
	return false
}

func main() {
	arr1 := []string{"a", "b", "c", "d"}

	arr2 := []string{"a", "c", "h", "f"}

	var res1 []string
	var res2 []string
	for i := 0; i <= len(arr1)-1; i++ {
		for j := 0; j <= len(arr2)-1; j++ {
			if arr1[i] == arr2[j] {
				res1 = append(res1, arr1[i])
			}
		}
	}
	for k := 0; k <= len(arr1)-1; k++ {
		if !isPresent(arr1[k], res1) {
			res2 = append(res2, arr1[k])
		}
	}
	for k := 0; k <= len(arr2)-1; k++ {
		if !isPresent(arr2[k], res1) {
			res2 = append(res2, arr2[k])
		}
	}
	fmt.Println(res2)

}

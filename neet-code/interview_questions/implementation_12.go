// You can edit this code!
// Click here and start typing.
package main

import "fmt"

//Given an amount of currency and denominations for coins being [1,5,10,50,100,500].
//How many total coins are needed for [0,12,468,123456] currencies?
//Example -  For 12 you need 3 coins, for 468 you need 10 coins.

func CheckDivisor(val int) int {

}

func Contains(denominations []int, val int) bool {
	for i := 0; i < len(denominations); i++ {
		if denominations[i] == val {
			return True
		} else {
			return False
		}

	}

}

func CalcDemoninations(num int) int {
	denominations := []int{1, 5, 10, 50, 100, 500}
	count := 0
	for num != 0 {
		ok := Contains(num)
		if ok {
			num = num % 10
			count = count + 1
		} else {
			val := CheckDivisor(num)
			count = count + val
		}

	}
	return count
}

func main() {
	res := CalcDenominations(12)
	fmt.Println(res)
}

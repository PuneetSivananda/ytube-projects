package main

import "fmt"

type messageToSend struct {
	phoneNumber int
	message     string
}

func test(m messageToSend) {
	fmt.Printf("Sending message: '%s' to '%v'\n", m.message, m.phoneNumber)
	fmt.Println("====================================================")
}

func main() {
	test(messageToSend{
		phoneNumber: 123456789,
		message:     "Thanks for signing up",
	})
	test(messageToSend{
		phoneNumber: 987654321,
		message:     "Welcome aboard!",
	})
	test(messageToSend{
		phoneNumber: 01234567,
		message:     "We're excited to have you",
	})
}

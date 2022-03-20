package main

import (
	"encoding/hex"
	"fmt"
	"log"
)

type HexaString struct {
	data string
}

func (h *HexaString) Encode() string {
	return ""
}

func (h *HexaString) Decode() string {
	return ""
}

func main() {
	content := []byte("Go is an open source programming language.")

	dest := make([]byte, hex.EncodedLen(len(content)))
	hex.Encode(dest, content)

	fmt.Printf("%s", dest)
	fmt.Println()
	src := []byte("476f20697320616e206f70656e20736f757263652070726f6772616d6d696e67206c616e67756167652e")

	dst := make([]byte, hex.DecodedLen(len(src)))
	n, err := hex.Decode(dst, src)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("%s\n", dst[:n])

}

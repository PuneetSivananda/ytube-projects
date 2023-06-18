package main

import (
	"fmt"
	"log"
	"net/http"
)

var urls = []string{
	"https://google.com",
	"https://tutorialspoint.com",
	"https://stackoverflow.com",
}

func FetchStatus(w http.ResponseWriter, r *http.Request) {
	for _, url:= range(urls){
		go func(url string){
			resp, err:= http.Get(url)
			if(err!=nil){
				fmt.Fprintf(w, "%+v\n", err)
			}
			fmt.Fprintf(w, "%+v\n", resp)
		}(url)
	}

}

func main() {
	fmt.Println("Go waitgroup tutorial")
	http.HandleFunc("/", FetchStatus)
	log.Fatal(http.ListenAndServe(":8000", nil))
}

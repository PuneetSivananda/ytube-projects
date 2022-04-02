package main

/**
Using slices to create a crud server.
**/

import ( // Dependencies

	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type Movie struct {
	ID       string    `json:"id"`
	Isbn     string    `json:"isbn"`
	Title    string    `json:"title"`
	Director *Director `json:"director"`
}

type Director struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
}

var movies []Movie

func getMovies(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w)
}

func main() {
	r := mux.NewRouter()

	movies = append(movies, Movie{
		ID:    "1",
		Isbn:  "428227",
		Title: "Movie1",
		Director: &Director{
			FirstName: "John",
			LastName:  "Doe",
		},
	})

	movies = append(movies, Movie{
		ID:    "2",
		Isbn:  "454535",
		Title: "Movie Two",
		Director: &Director{
			FirstName: "Jane",
			LastName:  "Doe",
		},
	})

	r.HandleFunc("/movies", getMovies).Methods("GET")
	r.HandleFunc("/movies/{id}", getMovie).Methods("GET")
	r.HandleFunc("/movies", createMovie).Methods("POST")
	r.HandleFunc("/movies/{id}", updateMovie).Methods("PUT")
	r.HandleFunc("/movies/{id}", deleteMovie).Methods("DELETE")

	fmt.Printf("Starting Server at Port 8000\n ")
	log.Fatal(http.ListenAndServe(":8000", r))
}

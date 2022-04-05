package routes

import (
	"github.com/gorilla/mux"
	"github.com/PuneetSivananda/go-bookstore/pkg/controllers"
)

var RegisterBookStoreRoutes = func(router *mux.Router){
	router.HandleFunc("/book/", controllers.createBook)
}
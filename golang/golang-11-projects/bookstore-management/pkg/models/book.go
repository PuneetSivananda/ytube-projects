package models

import (
	"github.com/jinzhu/gorm"
	"github.com/PuneetSivananda/go-bookstore/pkg/config"
)

var db *gorm.DB

type Book struct{
	gorm.model
	Name string
}

package main

import (
	"fmt"
	"net/http"
	"web-server/handlers"
)

func main() {
	server := http.NewServeMux()

	server.HandleFunc("/hello", handlers.HandleHello)
	server.HandleFunc("/template", handlers.HandleTemplate)

	fs := http.FileServer(http.Dir("./public"))
	server.Handle("/", fs)

	if err := http.ListenAndServe(":8080", server); err != nil {
		fmt.Printf("Error: %s\n", err)
	}
}

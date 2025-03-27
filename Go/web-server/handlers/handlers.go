package handlers

import (
	"html/template"
	"net/http"
	"web-server/data"
)

func HandleHello(w http.ResponseWriter, req *http.Request) {
	w.Write([]byte("Hello World!"))
}

type indexTemplate struct {
	title       string
	description string
	image       string
}

func HandleTemplate(w http.ResponseWriter, req *http.Request) {
	html, err := template.ParseFiles("./templates/index.tmpl")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	html.Execute(w, data.GetExhibitions())
}

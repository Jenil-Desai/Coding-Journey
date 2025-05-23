package api

import (
	"encoding/json"
	"net/http"
	"strconv"
	"web-server/data"
)

func Get(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id := r.URL.Query()["id"]
	if id != nil {
		finalId, err := strconv.Atoi(id[0])
		if err == nil && finalId < len(data.GetExhibitions()) {
			json.NewEncoder(w).Encode(data.GetExhibitions()[finalId])
		} else {
			http.Error(w, "Invalid Exhibition", http.StatusBadRequest)
		}

	} else {
		json.NewEncoder(w).Encode(data.GetExhibitions())
	}
}

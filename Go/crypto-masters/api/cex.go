package api

import (
	datatypes "crypto-masters/dataTypes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"
)

var apiUrl = "https://cex.io/api/ticker/%s/USD"

func GetRate(currency string) (*datatypes.Rate, error) {
	upperCaseCurrency := strings.ToUpper(currency)

	res, err := http.Get(fmt.Sprintf(apiUrl, upperCaseCurrency))
	if err != nil {
		return nil, err
	}

	var reponse CEXResponse
	if res.StatusCode == http.StatusOK {
		bodyBytes, err := io.ReadAll(res.Body)
		if err != nil {
			return nil, err
		}

		err = json.Unmarshal(bodyBytes, &reponse)
		if err != nil {
			return nil, err
		}
	} else {
		return nil, fmt.Errorf("error code received: %v", res.Status)
	}

	rate := datatypes.Rate{
		Currency: reponse.Pair,
		Price:    reponse.Bid,
	}
	return &rate, nil
}

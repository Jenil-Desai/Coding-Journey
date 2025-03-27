package main

import (
	"crypto-masters/api"
	"fmt"
)

func main() {
	rate, err := api.GetRate("BTC")

	if err != nil {
		panic(err)
	}

	fmt.Printf("The rate of BTC is %v\n", rate.Price)
}

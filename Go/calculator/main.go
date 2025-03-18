package main

import "fmt"

func main() {
	var operation string
	var num1, num2 int

	fmt.Println("GO CALCULATOR v1.0")
	fmt.Println("==================")

	fmt.Println("Enter Operation To Perform ? (Addition,Multiplication,Subtraction,Division) ")
	fmt.Scanf("%s", &operation)

	fmt.Println("Enter First Number: ")
	fmt.Scanf("%d", &num1)

	fmt.Println("Enter Second Number: ")
	fmt.Scanf("%d", &num2)

	switch operation {
	case "Addition":
		fmt.Println("Result: ", num1+num2)
	case "Multiplication":
		fmt.Println("Result: ", num1*num2)
	case "Subtraction":
		fmt.Println("Result: ", num1-num2)
	case "Division":
		fmt.Println("Result: ", num1/num2)
	default:
		fmt.Println("Invalid Operation")
	}
}

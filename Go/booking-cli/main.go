package main

import (
	hepler "booking-cli/helper"
	"fmt"
	"sync"
	"time"
)

const conferenceTickets uint8 = 50

var conferenceName string = "Go Conference"
var remainingTickets uint8 = 50
var bookings = make([]userData, 0)

type userData struct {
	firstName       string
	lastName        string
	email           string
	numberOfTickets uint8
}

var wg = sync.WaitGroup{}

func main() {

	greetUser()

	for remainingTickets > 0 && len(bookings) < 50 {

		firstName, lastName, email, userTickets := getuserInput()

		isValidName, isValidEmail, isValidTicketNumber := hepler.ValidateUserInput(firstName, lastName, email, userTickets, remainingTickets)

		if isValidName && isValidEmail && isValidTicketNumber {

			bookTicket(userTickets, firstName, lastName, email)

			firstNames := printFirstName()

			fmt.Println("````````````````````````````````````````````````````")
			fmt.Printf("%v Tickets Are Remaining For %v\n", remainingTickets, conferenceName)
			fmt.Printf("These Are All Our Bookings : %v\n", firstNames)
			fmt.Println("````````````````````````````````````````````````````")

			wg.Add(1)
			go sendTicket(userTickets, firstName, lastName, email)

			if remainingTickets == 0 {
				fmt.Print("All Tickets Of Conference Is Booked Out.")
				break
			}
		} else {
			if !isValidName {
				fmt.Println("Invalid First or Last Name")
			}

			if !isValidEmail {
				fmt.Println("Invalid Email Address")
			}

			if !isValidTicketNumber {
				fmt.Println("Invalid Ticket Number")
			}
		}

	}
	wg.Wait()
}

func greetUser() {
	fmt.Println("====================================================")
	fmt.Printf("Welcome To %v Booking Applications\n", conferenceName)
	fmt.Printf("We Have Total Of %v Tickets & %v Are Still Avaliable\n", conferenceTickets, remainingTickets)
	fmt.Println("Get Your Ticket To Attend")
	fmt.Println("====================================================")
}

func printFirstName() []string {
	var firstNames []string
	for _, booking := range bookings {
		firstNames = append(firstNames, booking.firstName)
	}
	return firstNames
}

func getuserInput() (string, string, string, uint8) {
	var firstName, lastName, email string
	var userTickets uint8

	fmt.Print("Enter Your First Name : ")
	fmt.Scan(&firstName)

	fmt.Print("Enter Your Last Name : ")
	fmt.Scan(&lastName)

	fmt.Print("Enter Your Email Address : ")
	fmt.Scan(&email)

	fmt.Print("Enter Number Of Tickets : ")
	fmt.Scan(&userTickets)

	return firstName, lastName, email, userTickets
}

func bookTicket(userTickets uint8, firstName string, lastName string, email string) {
	remainingTickets -= userTickets

	var userData = userData{
		firstName:       firstName,
		lastName:        lastName,
		email:           email,
		numberOfTickets: userTickets,
	}

	bookings = append(bookings, userData)
	fmt.Printf("List Of Bookings : %v\n", bookings)

	fmt.Println("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
	fmt.Printf("Thanks %v %v For Buying %v Tickets.\nYou Will Receive Email On %v\n", firstName, lastName, userTickets, email)
	fmt.Printf("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n\n")
}

func sendTicket(userTickets uint8, firstName string, lastName string, email string) {
	time.Sleep(10 * time.Second)
	var ticket = fmt.Sprintf("This %v Tickets Fot %v %v", userTickets, firstName, lastName)
	fmt.Println("#####")
	fmt.Printf("Sending ticket : \n %v \nTo Email Address : %v", ticket, email)
	fmt.Println("#####")
	wg.Done()
}

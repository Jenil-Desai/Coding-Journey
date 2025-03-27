package main

import (
	fileutils "file_handling/fileUtils"
	"fmt"
)

func main() {
	content, err := fileutils.ReadTextFile("text.txt")
	if err != nil {
		fmt.Printf("ERROR : %v", err)
	} else {
		println(content)
	}

	err = fileutils.WriteTextFile("text.txt", "Hello, World!")
	if err != nil {
		fmt.Printf("ERROR : %v", err)
	} else {
		println("File written successfully")
	}
}

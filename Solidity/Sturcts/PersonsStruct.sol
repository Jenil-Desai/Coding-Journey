// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PersonsStruct {
    struct Person {
        string name;
        uint age;
        address addr;
    }

    mapping(address => Person) private persons;

    function setName(string memory _name,uint _age) public {
        persons[msg.sender] = Person({
            name: _name,
            age: _age,
            addr: msg.sender
        });
    }

    function getName() public view returns (Person memory) {
        return persons[msg.sender];
    }
}

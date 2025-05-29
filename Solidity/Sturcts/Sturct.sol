// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PersonStruct {
    struct Person {
        string name;
        uint age;
        address addr;
    }

    Person public person;

    function setPerson(string memory _name, uint _age) public {
        person.name = _name;
        person.age = _age;
        person.addr = msg.sender;
    }

    function getPerson() public view returns (Person memory) {
        return person;
    }
}

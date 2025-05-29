// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract Vehicle {
    string private brand;

    constructor(string memory _brand) {
        brand = _brand;
    }

    function description() public virtual returns (string memory) {
        return "Vehicles are used to transport people and goods.";
    }
}

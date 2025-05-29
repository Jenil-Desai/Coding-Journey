// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./Vehicle.sol";

contract Car is Vehicle {
    uint numWheels;

    constructor(string memory _brand, uint _numWheels) Vehicle(_brand) {
        numWheels = _numWheels;
    }

    function description() public pure override returns (string memory) {
        return "Cars are used to transport people and goods.";
    }
}

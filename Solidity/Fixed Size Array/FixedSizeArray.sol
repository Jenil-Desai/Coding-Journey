//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FixedSizeArray {
    uint[18] public arr;

    function setNumber(uint _num) public {
        for (uint i = 0; i <= arr.length; i++) {
            arr[i] = _num;
        }
    }

    function getNumber(uint _index) public view returns (uint) {
        require(_index < arr.length,"Index Should Be Less Than 18");
        return arr[_index];
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DynamicArray {
    uint[] public arr;

    function setNum(uint _num) public {
        arr.push(_num);
    }

    function getLength() view public returns (uint) {
        return arr.length;
    }

    function getNum(uint _index) view public returns (uint) {
        require(_index < arr.length, "Index should be less than Array Length");
        return arr[_index];
    }
}

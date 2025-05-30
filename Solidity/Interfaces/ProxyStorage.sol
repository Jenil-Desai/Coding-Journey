// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IStorage {
    function getNum() external view returns (uint);

    function add() external;
}

contract ProxyStorage {
    constructor() {}

    function proxyAdd() public {
        IStorage(0xe2899bddFD890e320e643044c6b95B9B0b84157A).add();
    }

    function proxyGet() public view returns (uint) {
        uint value = IStorage(0xe2899bddFD890e320e643044c6b95B9B0b84157A)
            .getNum();
        return value;
    }
}

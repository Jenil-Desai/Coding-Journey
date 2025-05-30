// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Token} from "../src/Token.sol";

contract TokenTest is Test {
    Token public token;

    function setUp() public {
        token = new Token();
    }

    function test_Mint() public {
        address recipient = address(0x123);
        uint256 amount = 1000;

        token.mint(recipient, amount);

        assertEq(token.balanceOf(recipient), amount);
    }

    function test_Transfer() public {
        address sender = address(this);
        address recipient = address(0x456);
        uint256 amount = 500;

        token.mint(sender, amount);
        token.transfer(recipient, amount);

        assertEq(token.balanceOf(sender), 0);
        assertEq(token.balanceOf(recipient), amount);
    }

    function test_Approvals() public {
        address owner = address(this);
        address spender = address(0x789);
        uint256 amount = 300;

        token.mint(owner, amount);
        token.approve(spender, amount);

        assertEq(token.allowance(owner, spender), amount);
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Will is Ownable {
    uint256 private constant ONE_YEAR = 10 seconds;

    struct WillDetails {
        address owner;
        address payable recipient;
        uint256 lastPingTime;
    }

    WillDetails private will;

    constructor(address payable _recipient) payable Ownable(msg.sender) {
        require(msg.value > 0, "Amount should be greater than zero");

        will.owner = msg.sender;
        will.recipient = _recipient;
        will.lastPingTime = block.timestamp;
    }

    function transferWill(address payable _recipient) public onlyOwner {
        will.recipient = _recipient;
    }

    function ping() public onlyOwner {
        will.lastPingTime = block.timestamp;
    }

    function deposit() public payable onlyOwner {
        will.lastPingTime = block.timestamp;
    }

    function drain() public payable {
        require(will.lastPingTime < block.timestamp - ONE_YEAR, "Owner is still active");

        payable(will.recipient).transfer(address(this).balance);
    }

    function getWillInfo() external view returns (
        address owner_,
        address recipient_,
        uint balance_,
        uint256 lastPingTime_
    ) {
        return (
            will.owner,
            will.recipient,
            will.recipient.balance,
            will.lastPingTime
        );
    }
}

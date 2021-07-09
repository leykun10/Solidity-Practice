// SPDX-License-Identifier: MIT
pragma solidity 0.7.1;

contract Events{

    event Myevent(
        uint date,
        string val
    );

uint id;
function sendEvents(string calldata val) external{
    emit Myevent(block.timestamp, val);
}
 }
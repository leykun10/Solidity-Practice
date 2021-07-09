// SPDX-License-Identifier: MIT
pragma solidity 0.7.1;

contract Transfer{
   string public funcCalled = "empty";

    function sendEther() external payable{
         funcCalled="ether sent";
    }

    fallback() external payable{
        funcCalled="fallback called";
    }
}

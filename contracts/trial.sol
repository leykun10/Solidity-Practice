// SPDX-License-Identifier: MIT
pragma solidity 0.7.1;

contract Trial{
   string public funcCalled = "10";

    function sendEther() external payable{
         funcCalled="15";
    }

    fallback() external payable{
         funcCalled="1";
    }
}

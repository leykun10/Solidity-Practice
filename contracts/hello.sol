// SPDX-License-Identifier: MIT
pragma solidity 0.7.1;

contract Hello{

   
   string greeting;

   constructor()
   {
       greeting='hey';
   }

    
    function getGreeting() public view returns (string memory)
    {
        return greeting;
    }


   function setGreeting(string memory _greeting) public {
     greeting=_greeting;

    } 
}
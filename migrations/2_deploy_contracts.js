const Hello = artifacts.require("Hello");

module.exports = function (deployer,_,accounts) {
  deployer.deploy(Hello);
  web3.eth.sendTransaction(
    {from:accounts[0],
    to:'0xE5d7168AAbb9E3b74Eb3B380e9610e0e578cb102'
    ,value:web3.utils.toWei('1', 'ether')
  } , 
    );


};
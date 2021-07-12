const Web3 = require('web3')                    ;
const Hello= require('./build/contracts/Hello.json');
const HdWalletProvider=require('@truffle/hdwallet-provider');


eth_account = {
    "address": "0xE5d7168AAbb9E3b74Eb3B380e9610e0e578cb102",
    "privateKey": "0x9416a9e12242cafedbe25f2d4f2ff3062e62795a19125b86a3b6917391b2980e"
  }


async function init() {
   const provider = new HdWalletProvider(eth_account.privateKey,
    "http://localhost:9545")

    web3 = new Web3(provider);
    const id = await web3.eth.net.getId()                                               ;
    const deployedNetwork= Hello.networks[id];
    const contract = new web3.eth.Contract(Hello.abi,deployedNetwork.address);
    await contract.methods.setGreeting("maybe").send({from:eth_account.address})
    const result = await contract.methods.getGreeting().call();
    console.log(result);

}

init()
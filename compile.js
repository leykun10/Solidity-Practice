const path = require('path');
const fs = require('fs');
const solc = require('solc');
const helloPath = path.resolve(__dirname,'contracts', 'hello.sol');
const source = fs.readFileSync(helloPath, 'UTF-8');
const Web3 = require('web3')
const Hello= require('./build/contracts/Hello.json')

const init = async ()=>{

    const web3 = new Web3('http://localhost:8545');
    const id =await web3.eth.net.getId();
    const deployedNetwork = Hello.networks[id];
    const contract = new web3.eth.Contract(Hello.abi,
        deployedNetwork.address);
   const result = await contract.methods.getGreeting().call()
   console.log(result);
}

init()






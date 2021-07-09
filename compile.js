const path = require('path');
const fs = require('fs');
const solc = require('solc');
const helloPath = path.resolve(__dirname,'contracts', 'hello.sol');
const source = fs.readFileSync(helloPath, 'UTF-8');
const Web3 = require('web3')
const Hello= require('./build/contracts/Hello.json')

const init = async ()=>{

    const web3 = new Web3('http://127.0.0.1:9545');
    const id =await web3.eth.net.getId();
    const deployedNetwork = Hello.networks[id];
    const addresses = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(Hello.abi,deployedNetwork.address);
    const receit = await contract.methods.setGreeting("cant beleive it worked").send({from:addresses[0]});
    const result = await contract.methods.getGreeting().call();
    console.log(result);
    // console.log(result);

}

init()






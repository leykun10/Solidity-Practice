const path = require('path');
const fs = require('fs');
const solc = require('solc');
const helloPath = path.resolve(__dirname,'contracts', 'hello.sol');
const source = fs.readFileSync(helloPath, 'UTF-8');
const Web3 = require('web3')
const Hello= require('./build/contracts/Hello.json')
const Transfer= require('./build/contracts/Transfer.json')
const Event= require('./build/contracts/Events.json')



const init = async ()=>{

    const web3 = new Web3('ws://127.0.0.1:9545');
    const id =await web3.eth.net.getId();
    const deployedNetwork = Hello.networks[id];
    const deployedNetwork2=Transfer.networks[id];
    const deployedNetwork3=Event.networks[id];

    const addresses = await web3.eth.getAccounts();
    const contract3 = new web3.eth.Contract(Event.abi,deployedNetwork3.address);
    const contract2 = new web3.eth.Contract(Transfer.abi,deployedNetwork2.address);
    const contract = new web3.eth.Contract(Hello.abi,deployedNetwork.address);
    contract3.events.Myevent({}).on("data",function(event){
        console.log(event); // same results as the optional callback above
    }).on('error', console.error);
    await contract3.methods.sendEvents("hello hello").send(
        {from:addresses[0]}
    ); 
    
    
    await new Promise(function (resolve,reject){
        console.log("late");
        setTimeout(()=>resolve(),2000)
    });
    await contract3.methods.sendEvents("hello").send(
        {from:addresses[0]}
    );  

    // const receit = await contract.methods.setGreeting("cant beleive it worked").send({from:addresses[0]});
    // const result = await contract.methods.getGreeting().call();
    // const result = await contract2.methods.sendEther().send({from:addresses[0],
    //     value:"1000"}
    //     );
    //  const ms = await contract2.methods.funcCalled().call()
    //  console.log(ms);
    

}

init()






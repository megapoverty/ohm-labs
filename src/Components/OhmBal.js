import React, {Component} from "react";
const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || "https://mainnet.infura.io/v3/8cb549f4c7cb40b6973e5b850349814b");

export class OhmBal extends Component {
    render() {
        return (
            <div>
                <h1>OHM Balance Fetcher</h1>
                <p>Enter your Ethereum Address:</p>
                <input type="text" size="50" id="address"/>
                <button type="button" onClick={getOhmBalance}>Get Balance</button>
                <br/>
                <br/>
                <div id="output2">Press Button</div>
            </div>
        );
    }

}

//sOHM token addr
let tokenAddress = "0x04f2694c8fcee23e8fd0dfea1d4f5bb8c352111f";

// The minimum ABI to get ERC20 Token balance
let minABI = [
    // balanceOf
    {
        "constant": true,
        "inputs": [{"name": "_owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "balance", "type": "uint256"}],
        "type": "function"
    },
    // decimals
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{"name": "", "type": "uint8"}],
        "type": "function"
    }
];

let contract = new web3.eth.Contract(minABI, tokenAddress);

async function getOhmBalance() {
    let walletAddress;
    walletAddress = document.getElementById("address").value;


    await web3.eth.getBalance(walletAddress, function(err, result){
        if (err){
            console.log(err);
        }else{
            console.log(web3.utils.fromWei(result, 'ether') + " ETH");
        }
    });


    await contract.methods.balanceOf(walletAddress).call(
        {from: ''}, function (error, result) {
            if (error) {
                console.log(error);
            } else {
                let convertedResult = web3.utils.fromWei(result, 'Gwei');
                document.getElementById("output2").innerHTML =
                    convertedResult + ' Ohm';
            }
        }
    );


}

//Creating a token instance
//Starting w ether
//sOHM Addr: 0x04F2694C8fcee23e8Fd0dfEA1d4f5Bb8c352111F


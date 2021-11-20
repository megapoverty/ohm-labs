import React, {Component} from "react";

const BN = require('bn.js');
const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || "https://mainnet.infura.io/v3/8cb549f4c7cb40b6973e5b850349814b");

export class AccountBal extends Component {
    render() {
        return (
            <div>
                <h1>ETH Balance Fetcher</h1>
                <p>Enter your Ethereum Address:</p>
                <input type="text" size="50" id="address"/>
                <button type="button" onClick={getBalance}>Get Balance</button>
                <br/>
                <br/>
                <div id="output">Press Button</div>
            </div>
        );
    }

}

async function getBalance() {
    let address
    address = document.getElementById("address").value;
    await web3.eth.getBalance(address, function (err, result) {
        if (err) {
            console.log(err)
        } else {
            document.getElementById("output").innerHTML =
                web3.utils.fromWei(result, 'ether') + " Eth";
            console.log(web3.utils.fromWei(result, 'ether') + " ETH");
        }
    })


}

//Creating a token instance
//Starting w ether
//sOHM Addr: 0x04F2694C8fcee23e8Fd0dfEA1d4f5Bb8c352111F


import React, {Component} from "react";

export class EnableButton extends Component {
    render() {
        return (
            <div>
                <button className="enableEthereumButton" onClick={connectMask}>Connect Metamask</button>
            </div>
        );
    }
}

async function connectMask() {
    let ethereum;
    const showAccount = document.querySelector('.showAccount');
    ethereum = window.ethereum;
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    const account = accounts[0];
    // We currently only ever provide a single account,
    // but the array gives us some room to grow.
    showAccount.innerHTML = account;
}
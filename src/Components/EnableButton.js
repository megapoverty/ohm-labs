import React, {Component} from "react";
import {abi as OlympusStakingv2ABI} from "./OlympusStakingv2.json";
import {abi as sOHMv2} from "../sOhmv2.json";
import {provider} from "../Constants";
import {ethers} from "ethers";

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


    const stakingContract = new ethers.Contract(
        "0xfd31c7d00ca47653c6ce64af53c1571f9c36566a",
        OlympusStakingv2ABI,
        provider,
    )


    const sohmMainContract = new ethers.Contract(
        "0x04F2694C8fcee23e8Fd0dfEA1d4f5Bb8c352111F",
        sOHMv2,
        provider,
    )

    const epoch = await stakingContract.epoch();
    console.log('Code had gotten to epoch');
    console.log(epoch);
    const stakingReward = epoch.distribute;
    const circ = await sohmMainContract.circulatingSupply();
    const stakingRebase = Number(stakingReward.toString()) / Number(circ.toString());
    const fiveDayRate = Math.pow(1 + stakingRebase, 5 * 3) - 1;
    const stakingAPY = Math.pow(1 + stakingRebase, 365 * 3) - 1;
    const trimmedStakingAPY = (stakingAPY * 100);
    console.log('Staking APY: ' + trimmedStakingAPY);
}
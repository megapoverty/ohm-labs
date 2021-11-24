import * as React from "react";

import { ethers } from "ethers";
import { abi as OlympusStakingv2ABI } from "./OlympusStakingv2.json";
import { abi as sOHMv2 } from "../sOhmv2.json";
import { provider } from "../Constants";

import { getOhmBalance } from "./OhmBal";
import axios from "axios";

export const BalanceForm = (props) => {
    const [addressInput, setAddressInput] = React.useState("");
    const [dailyAmount, setDailyAmount] = React.useState(null);
    
    const checkYields = async () => {
        console.log(addressInput);
        if (typeof addressInput !== "undefined" && addressInput.length > 0) {
            // check valid hex address for crypto
            const stakingContract = new ethers.Contract(
                "0xfd31c7d00ca47653c6ce64af53c1571f9c36566a",
                OlympusStakingv2ABI,
                provider,
            );

            const sohmMainContract = new ethers.Contract(
                "0x04F2694C8fcee23e8Fd0dfEA1d4f5Bb8c352111F",
                sOHMv2,
                provider,
            );

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

            let ohmBalance = await getOhmBalance(addressInput);
            console.log(ohmBalance);
            ohmBalance /= (Math.pow(10, 9));
            console.log(ohmBalance);

            const ohmPrice = await getTokenPrice();
            console.log(ohmPrice);

            console.log(stakingRebase);

            const dailyAmt = 3 * (stakingRebase * ohmBalance) * ohmPrice;
            console.log(dailyAmt);
            setDailyAmount(dailyAmt);
        }
    }

    const getTokenPrice = async (tokenId = "olympus") => {
        return new Promise((resolve, reject) => {
            axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd`)
            .then(response => {
                const data = response.data;
                const price = data[tokenId].usd;
                console.log(price);
                resolve(price);
            })
            .catch(err => {
                reject(err.toString());
            });
        });
        return axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd`)
            .then(response => {
                const data = response.data;
                const price = data[tokenId].usd;
                console.log(price);
                Promise.resolve(price);
            })
            .catch(err => {
                Promise.reject(err.toString());
            });
    }

    return (
        <div className="balance-content">
            <label htmlFor="address_input">Enter Address: </label>
            <input
                type="text"
                id="address_input"
                value={addressInput}
                onChange={(e) => setAddressInput(e.target.value)}
            />
            <button onClick={checkYields}>Check Your Yields</button>
            {typeof dailyAmount !== "undefined" && 
                <span>{dailyAmount}</span>
            }
        </div>
    );
}
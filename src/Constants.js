const ethers = require('ethers');
const Web3 = require('web3');
export const web3 = new Web3(Web3.givenProvider || "https://mainnet.infura.io/v3/8cb549f4c7cb40b6973e5b850349814b");
export const provider = new ethers.providers.Web3Provider(web3.currentProvider);

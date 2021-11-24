import React, {Component} from "react";
import axios from "axios";


let ohmPrice = 11;

export class OhmPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {price: 1};
    }

    render() {


        return (
            <div>
                <p>
                    The Current Price of OHM is: ${this.state.price}
                </p>
            </div>
        )
    }

    componentDidMount() {
        
        console.log(this.getTokenPrice().then());

    }


    async getTokenPrice(tokenId = "olympus") {
        let resp;
        try {
            resp = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd`);
            console.log('Program here_1');
            console.log(resp.data[tokenId].usd);

            this.setState({price: resp.data[tokenId].usd});
            return resp.data[tokenId].usd;
        } catch (e) {
            console.log("coingecko api error: ", e);
        }
    }
}


export default OhmPrice;
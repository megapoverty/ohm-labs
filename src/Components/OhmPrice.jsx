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


    
}


export default OhmPrice;
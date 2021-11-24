import logo from './logo.svg';
import './App.css';
import {EnableButton} from "./Components/EnableButton";
import {AccountRender} from "./Components/AccountRender";
import {OhmBal} from "./Components/OhmBal";
import {OhmPrice} from "./Components/OhmPrice";
import {currentAPY} from "./Components/currentAPY";
import { BalanceForm } from "./Components/BalanceForm";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    The goal is to connect to your eth wallet and tell you how much ohm you make per day.
                </p>
                <BalanceForm />
                {/* <EnableButton/>
                <AccountRender/>
                <OhmBal/>
                <OhmPrice/>
                <currentAPY/> */}
            </header>
        </div>
    );
}

export default App;

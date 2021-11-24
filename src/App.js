import logo from './logo.svg';
import './App.css';
import {EnableButton} from "./Components/EnableButton";
import {AccountRender} from "./Components/AccountRender";
import {OhmBal} from "./Components/OhmBal";
import {OhmPrice} from "./Components/OhmPrice";
import {currentAPY} from "./Components/currentAPY";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>Hello world, this is a test app.</h1><br/>
                <p>
                    The goal is to connect to your eth wallet and tell you how much ohm you make per day.
                </p>
                <EnableButton/>
                <AccountRender/>
                <OhmBal/>
                <OhmPrice/>
                <currentAPY/>
            </header>
        </div>
    );
}

export default App;

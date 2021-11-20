import logo from './logo.svg';
import './App.css';
import {EnableButton} from "./Components/EnableButton";
import {AccountRender} from "./Components/AccountRender";
import {AccountBal} from "./Components/AccountBal";

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
                <AccountBal/>
            </header>
        </div>
    );
}

export default App;

import './App.css';
import { BalanceForm } from "./Components/BalanceForm";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    The goal is to connect to your eth wallet and tell you how much ohm you make per day.
                </p>
                <BalanceForm />
            </header>
        </div>
    );
}

export default App;

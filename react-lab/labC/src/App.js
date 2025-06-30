import "./App.css";
import { useState } from 'react';

function App() {
    const [ num, setNum ] = useState(0);
    return (
        <div className="app-container">
            <h1>Current number: {num}</h1>
            <div className="button-container">
              <button className="counter-button" onClick={() => setNum(num + 1)}>+1</button>
              <button className="counter-button" onClick={() => setNum(num - 1)}>-1</button>
            </div>
        </div>
    );
}

export default App;

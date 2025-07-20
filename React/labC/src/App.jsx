import "./App.css";
import { useState } from 'react';
import DessertsList from "./DessertsList";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
  {
    name: "Cherry Pie",
    calories: 500,
    createdAt: "2025-07-07",
  },
];

function App() {
    const [ num, setNum ] = useState(0);
    return (
        <>
        <div className="App">
            <h2>List of low calorie desserts:</h2>
            <DessertsList data={desserts} />
        </div>
        <hr />
        <div className="app-container">
            <h2>Current number: {num}</h2>
            <div className="button-container">
              <button className="counter-button" onClick={() => setNum(num + 1)}>+1</button>
              <button className="counter-button" onClick={() => setNum(num - 1)}>-1</button>
            </div>
        </div>
        </>
    );
}

export default App;

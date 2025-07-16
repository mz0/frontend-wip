import { useState } from "react";

function GoalForm(props) {
  const [formData, setFormData] = useState({goal:'', by:''});

  function onChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  function onSubmit() {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: '', by: '' });
  }

  return (
    <><h1>TODO</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="goal" value={formData.goal} onChange={onChange} placeholder="Goal" />
        <input type="text" name="by" value={formData.by} onChange={onChange} placeholder="By..." />
        <button>Submit Goal</button>
      </form>
    </>
  );
}

function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => {
        <li key={g.goal}> <span> My goal is to {g.goal}, by {g.by}</span></li>  
      })}
    </ul>
  );
}

export function GoalApp() {
  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) { updateAllGoals([...allGoals, goal]); }

  return (
    <div>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
}
 
export default function App() { 
  const [greeting, setGreeting] = useState( 
    { 
        greet: "Hello", 
        place: "World" 
    } 
  ); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { // using arrow-fun & spread op.
    setGreeting(prevState => {  // create and return a new Object  
        return {...prevState, place: "World-Wide Web"}
    });
  }
 
  return ( 
    <div> 
      <h1>{greeting.greet}, {greeting.place}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
}

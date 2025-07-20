import {useReducer} from 'react';

const reducer = (state, action) => {
	if (action.type === 'buy') return {money: state.money - 10};
	if (action.type === 'sell') return {money: state.money + 12};
	return state;
}

function App() {
	const initialState = {money: 100};
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
	 <div>
	 <h1>Wallet: {state.money}</h1>
	 <button onClick={() => dispatch({type: 'buy'})}>Buy veggies</button>
	 <button onClick={() => dispatch({type: 'sell'})}>Serve a salad</button>
	 </div>
	);
}

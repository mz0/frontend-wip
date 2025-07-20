import React from 'react';

function App() {
	const formInputRef = React.useRef(null);

	const focusInput = () => {
		formInputRef.current.focus();
	}

	return (
		<>
		<input ref={formInputRef} type="text" />
		<button onClick={focusInput}>Input in focus</button>
		</>
	);
}

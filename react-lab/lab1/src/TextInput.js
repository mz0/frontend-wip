import { useState } from 'react';

function TextInput() {
  const [inputText, setText] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  // only call hooks at the top level of your component or your own hooks. 
  // do not call hooks inside loops or conditions. 
  // only call hooks from React functions, and not regular JavaScript functions. 
  return (
    <>
      <input value={inputText} onChange={handleChange} />
      <p>You typed: {inputText}</p>
      <button onClick={() => setText('hello')}>
        Reset
      </button>
    </>
  );
}

export default TextInput;
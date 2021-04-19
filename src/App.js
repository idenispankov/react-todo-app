import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = ['some', 'some2', 'some3'];

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue('');
  };

  return (
    <div className='container'>
      <nav className='navbar'>
        <h1>React Todo App</h1>
        {/* <a href='#'>About</a> */}
      </nav>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='input'
          placeholder='Add Todo...'
          value={inputValue}
          onChange={handleChange}
        />
        <button className='button'>Add Todo</button>
      </form>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return;
    }
    const newTodos = [...todos, { id: uuidv4(), text: inputValue }];
    setTodos(newTodos);
    setInputValue('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    alert('Edit coming soon...');
  };
  const clearTodos = () => {
    setTodos([]);
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
        <button className='button' type='submit'>
          Add Todo
        </button>
      </form>
      <ul className='list'>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button className='button' onClick={() => editTodo(todo.id)}>
              Edit Todo
            </button>
            <button className='button' onClick={() => deleteTodo(todo.id)}>
              Delete Todo
            </button>
          </li>
        ))}
      </ul>
      <button className='button' onClick={clearTodos}>
        Clear All Todos
      </button>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return;
    }
    setTodos([...todos, { todoText: inputValue, todoId: uuidv4() }]);
    setInputValue('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.todoId !== id));
  };

  const handleEdit = (id) => {};

  return (
    <div className='page__container'>
      <form className='form' autoComplete='off' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form__input'
          placeholder='Add Todo...'
          value={inputValue}
          onChange={handleChange}
        />
        <button type='submit' className='form__button'>
          Add
        </button>
      </form>
      <ul className='list'>
        {todos.map((todo) => {
          return (
            <li key={todo.todoId} className='list__item'>
              {todo.todoText}
              <div className='icons'>
                {/* <span
                  onClick={() => handleEdit(todo.todoId)}
                  className='list__item-edit-button'
                >
                  Edit
                </span> */}
                <span
                  onClick={() => handleDelete(todo.todoId)}
                  className='list__item-delete-button'
                >
                  X
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

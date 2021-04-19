import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ todos, setTodos, setErrorMessage, setSuccessMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 1500);
      return;
    }
    setTodos([...todos, { todoText: inputValue, todoId: uuidv4() }]);
    setInputValue('');
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
    }, 1500);
  };

  return (
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
  );
};

export default Form;

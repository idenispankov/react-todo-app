import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({
  todos,
  setTodos,
  setErrorMessage,
  setSuccessMessage,
  setMessage,
  inputRef,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setErrorMessage(true);
      setMessage(true);

      setTimeout(() => {
        setErrorMessage(false);
        setMessage(false);
      }, 2000);
      return;
    }
    setTodos([...todos, { todoText: inputValue, todoId: uuidv4() }]);
    setInputValue('');
    setSuccessMessage(true);
    setMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
      setMessage(false);
    }, 2000);
  };

  return (
    <form className='form' autoComplete='off' onSubmit={handleSubmit}>
      <input
        type='text'
        className='form__input'
        placeholder='Add Todo...'
        value={inputValue}
        onChange={handleChange}
        ref={inputRef}
      />
      <button type='submit' className='button form__button'>
        Add
      </button>
    </form>
  );
};

export default Form;

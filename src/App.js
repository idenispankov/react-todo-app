import { useState, useEffect, useRef } from 'react';
import Form from './components/Form';
import Todos from './components/Todos';
import Message from './components/Message';

function App() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className='page__container'>
      <h1 className='heading'>React Todo App</h1>
      {message && (
        <Message
          errorMessage={errorMessage}
          successMessage={successMessage}
          deleteMessage={deleteMessage}
        />
      )}

      <Form
        todos={todos}
        setTodos={setTodos}
        setErrorMessage={setErrorMessage}
        setSuccessMessage={setSuccessMessage}
        setMessage={setMessage}
        inputRef={inputRef}
      />
      <Todos
        todos={todos}
        setTodos={setTodos}
        setDeleteMessage={setDeleteMessage}
        setMessage={setMessage}
      />
    </div>
  );
}

export default App;

//  Next to add:

//  1. Cross completed todo
//  2. Popup for edit todos
//  3. Confirm Popup for delete todo

//  4. NavBar Component with Routes
//  5. Route for description of each todo onClick
//  6. Wrong url Error Route

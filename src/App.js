import React, { useState } from 'react';
import Form from './components/Form';
import Todos from './components/Todos';
import Error from './components/Error';
import Success from './components/Success';

function App() {
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  return (
    <div className='page__container'>
      <h1 className='test'>React Todo App</h1>
      {errorMessage && <Error />}
      {successMessage && <Success />}
      {/* <Error /> */}
      <Form
        todos={todos}
        setTodos={setTodos}
        setErrorMessage={setErrorMessage}
        setSuccessMessage={setSuccessMessage}
      />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

//  Next to create:
//  1. Error Message - Done
//  2. Success message - Done
//  3. Delete Success Message
//  4. Popup for edit todos
//  5. NavBar Component with Routes
//  6. Route for description of each todo onClick
//  7. Wrong url Error Route

import React, { useState } from 'react';
import Form from './components/Form';
import Todos from './components/Todos';
import Error from './components/Error';

function App() {
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);

  return (
    <div className='page__container'>
      <h1 className='test'>React Todo App</h1>
      {errorMessage && <Error />}
      {/* <Error /> */}
      <Form
        todos={todos}
        setTodos={setTodos}
        setErrorMessage={setErrorMessage}
      />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

//  Next to create:
//  1. Error Message - Done
//  2. Success message
//  3. Popup for edit todos
//  4. NavBar Component with Routes
//  5. Route for description of each todo onClick
//  6. Wrong url Error Route

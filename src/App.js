import { useState } from 'react';
import Form from './components/Form';
import Todos from './components/Todos';
import Error from './components/Error';
import Success from './components/Success';
import DeleteSuccess from './components/DeleteSuccess';

function App() {
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);

  return (
    <div className='page__container'>
      <h1 className='test'>React Todo App</h1>
      {errorMessage && <Error />}
      {successMessage && <Success />}
      {deleteMessage && <DeleteSuccess />}
      <Form
        todos={todos}
        setTodos={setTodos}
        setErrorMessage={setErrorMessage}
        setSuccessMessage={setSuccessMessage}
      />
      <Todos
        todos={todos}
        setTodos={setTodos}
        setDeleteMessage={setDeleteMessage}
      />
    </div>
  );
}

export default App;

//  Next to create:
//  1. Error Message - Done
//  2. Success message - Done
//  3. Delete Success Message - Done
//  4. Combine messages together
//  5. Popup for edit todos
//  6. NavBar Component with Routes
//  7. Route for description of each todo onClick
//  8. Wrong url Error Route

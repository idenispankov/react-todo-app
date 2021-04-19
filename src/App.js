import { useState } from 'react';
import Form from './components/Form';
import Todos from './components/Todos';
import Message from './components/Message';

function App() {
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [message, setMessage] = useState(false);
  const [messageText, setMessageText] = useState('');

  return (
    <div className='page__container'>
      <h1 className='heading'>React Todo App</h1>
      {message && (
        <Message
          errorMessage={errorMessage}
          successMessage={successMessage}
          deleteMessage={deleteMessage}
          messageText={messageText}
        />
      )}

      <Form
        todos={todos}
        setTodos={setTodos}
        setErrorMessage={setErrorMessage}
        setSuccessMessage={setSuccessMessage}
        setMessage={setMessage}
        setMessageText={setMessageText}
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

//  Next to create:
//  1. Error Message - Done
//  2. Success message - Done
//  3. Delete Success Message - Done
//  4. Combine messages together - Done

//  5. Popup for edit todos
//  6. Confirm Popup for delete todo

//  6. NavBar Component with Routes
//  7. Route for description of each todo onClick
//  8. Wrong url Error Route

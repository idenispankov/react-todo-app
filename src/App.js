import { useState } from 'react';
import Form from './components/Form';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className='page__container'>
      <h1 className='test'>React Todo App</h1>
      <Form todos={todos} setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

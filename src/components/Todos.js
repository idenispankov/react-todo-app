const Todos = ({ todos, setTodos, setDeleteMessage, setMessage }) => {
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.todoId !== id));
    setDeleteMessage(true);
    setMessage(true);
    setTimeout(() => {
      setDeleteMessage(false);
      setMessage(false);
    }, 2000);
  };

  const handleEditTodo = (id, text) => {
    alert(`Edit is coming soon, item ID: ${id}`);
  };
  return (
    <ul className='list'>
      {todos.map((todo) => {
        return (
          <li key={todo.todoId} className='list__item'>
            {todo.todoText}
            <div className='icons'>
              <span
                onClick={() => handleEditTodo(todo.todoId)}
                className='list__item-edit-button'
              >
                Edit
              </span>
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
  );
};

export default Todos;

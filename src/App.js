const TodoItem = () => {
  return (
    <ul className='list'>
      <li className='list__item'>
        Some todo
        <span className='list__item-button'>X</span>
      </li>
    </ul>
  );
};

const Form = () => {
  return (
    <form className='form' autoComplete='off'>
      <input type='text' className='form__input' placeholder='Add Todo...' />
      <button className='form__button'>Add</button>
    </form>
  );
};

function App() {
  return (
    <div className='page__container'>
      <Form />
      <TodoItem />
    </div>
  );
}

export default App;

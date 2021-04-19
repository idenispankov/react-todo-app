const Message = ({ errorMessage, successMessage, deleteMessage }) => {
  return (
    <p
      className={`message ${
        errorMessage
          ? 'error'
          : successMessage
          ? 'success'
          : deleteMessage
          ? 'delete'
          : ''
      }`}
    >
      {errorMessage
        ? 'Please Enter Todo...'
        : successMessage
        ? 'Todo Added...'
        : deleteMessage
        ? 'Todo Deleted...'
        : ''}
    </p>
  );
};

export default Message;

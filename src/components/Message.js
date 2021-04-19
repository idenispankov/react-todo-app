const Message = ({
  errorMessage,
  successMessage,
  deleteMessage,
  clearMessage,
}) => {
  return (
    <p
      className={`message ${
        errorMessage
          ? 'error'
          : successMessage
          ? 'success'
          : deleteMessage
          ? 'delete'
          : clearMessage
          ? 'clear'
          : ''
      }`}
    >
      {errorMessage
        ? 'Please Enter Todo...'
        : successMessage
        ? 'Todo Added...'
        : deleteMessage
        ? 'Todo Deleted...'
        : clearMessage
        ? 'List Cleared...'
        : ''}
    </p>
  );
};

export default Message;

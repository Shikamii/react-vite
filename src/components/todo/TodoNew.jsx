const TodoNew = (props) => {
  console.log({ props });
  const { addNewTodo } = props;

  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  // };
  const handleOnChange = (name) => {
    console.log(name);
  };
  return (
    <div className="todo_new">
      <input
        type="text"
        placeholder="Enter your task"
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <button onClick={addNewTodo}>Add</button>
    </div>
  );
};
export default TodoNew;

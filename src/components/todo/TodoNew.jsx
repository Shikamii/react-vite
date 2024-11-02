const TodoNew = (props) => {
  console.log({ props });
  const { addNewTodo } = props;
  return (
    <div className="todo_new">
      <input type="text" placeholder="Enter your task" />
      <button onClick={addNewTodo}>Add</button>
    </div>
  );
};
export default TodoNew;

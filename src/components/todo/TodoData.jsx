const TodoData = (props) => {
  // console.log({ props });

  const { todoList, removeTodo } = props;

  const handleClick = (id) => {
    removeTodo(id);
  };
  return (
    <div className="todo_data">
      {/* <div>My name is {name}</div>
      <div>My name is {age}</div>
      <div>My name is {JSON.stringify(data)}</div> */}
      <div>Learning React</div>
      <div>To do List: {JSON.stringify(props.todoList)}</div>

      {todoList.map((item, index) => {
        return (
          <>
            <div className="todo_item" key={item.id}>
              <div>{item.name}</div>
              <button
                onClick={() => handleClick(item.id)}
                style={{ cursor: "pointer" }}
              >
                Delete
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default TodoData;

const TodoData = (props) => {
  // console.log({ props });

  const { name, age, data, todoList } = props;
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
            <div className="todo_item" key={index}>
              <div>{item.name}</div>
              <button>Delete</button>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default TodoData;

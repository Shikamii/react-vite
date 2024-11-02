import { useState } from "react";

const TodoNew = (props) => {
  // console.log({ props });
  const { addNewTodo } = props;

  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  // };

  const handleClick = () => {
    // goi hàm của thằng cha nè
    addNewTodo(valueInput);
    // input này là input đang nhờ react quản lý -> state đó
  };

  const [valueInput, setValueInput] = useState("NAD");
  const handleOnChange = (name) => {
    // console.log(name);
    setValueInput(name);
  };
  return (
    <div className="todo_new">
      <input
        type="text"
        placeholder="Enter your task"
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      <div>My text input is {valueInput}</div>
    </div>
  );
};
export default TodoNew;

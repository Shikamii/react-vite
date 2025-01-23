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
    // truyền valueInput vào hàm của thằng cha
    setValueInput(""); // reset lại giá trị của input
  };

  const [valueInput, setValueInput] = useState("NAD");
  const handleOnChange = (name) => {
    // console.log(name);
    setValueInput(name); // cập nhật giá trị của input
  };
  return (
    <div className="todo_new">
      <input
        type="text"
        placeholder="Enter your task"
        onChange={(event) => handleOnChange(event.target.value)}
        // lấy giá trị của input rồi truyền vào hàm handleOnChange
        value={valueInput}
      />
      <button onClick={handleClick}>Add</button>
      {/*khi click vào button thì gọi hàm handleClick - gọi hàm của thằng cha*/}
      <div>My text input is {valueInput}</div>
    </div>
  );
};
export default TodoNew;

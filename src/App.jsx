import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import { useState } from "react";
const App = () => {
  const name = "Nguyen Anh Duc";
  const age = 25;
  const data = {
    company: "HBlab",
    address: "219 trung kinh ",
  };

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching Youtube" },
  ]);
  const addNewTodo = (name) => {
    // alert(`xin chao ${name}`);
    const newToDo = {
      id: randomIntFromInterval(1, 10000),
      name: name,
    };

    setTodoList([...todoList, newToDo]);
  };
  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <>
      <div className="todo_container">
        <div className="todo_title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />
        <TodoData name={name} age={age} data={data} todoList={todoList} />
        <div className="todo_image">
          <img src={reactLogo} alt="" className="logo react" />
        </div>
      </div>
    </>
  );
};

export default App;

import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import { useState } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
const App = () => {
  const name = "Nguyen Anh Duc";
  const age = 25;
  const data = {
    company: "HBlab",
    address: "219 trung kinh ",
  };

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watching Youtube" },
  ]);
  const addNewTodo = (name) => {
    // alert(`xin chao ${name}`);
    const newToDo = {
      id: randomIntFromInterval(1, 10000),
      name: name,
    };
    // ở thằng cha sẽ nhận được giá trị name từ thằng con TodoNew
    // rồi cập nhật lại giá trị của todoList qua hàm setTodoList
    // giá trị của todolist được thay đổi, cập nhật thêm
    // dẫn đến props.todoList ở thằng con TodoData cũng thay đổi -> re-render lại data
    setTodoList([...todoList, newToDo]);
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };
  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <>
      <Header />
      <div className="todo_container">
        <div className="todo_title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />

        {todoList.length > 0 ? (
          <TodoData todoList={todoList} removeTodo={removeTodo} />
        ) : (
          <div className="todo_image">
            <img src={reactLogo} alt="" className="logo react" />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;

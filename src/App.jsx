import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
const App = () => {
  const name = "Nguyen Anh Duc";
  const age = 25;
  const data = {
    company: "HBlab",
    address: "219 trung kinh ",
  };
  return (
    <>
      <div className="todo_container">
        <div className="todo_title">Todo List</div>
        <TodoNew />
        <TodoData name={name} age={age} data={data} />
        <div className="todo_image">
          <img src={reactLogo} alt="" className="logo react" />
        </div>
      </div>
    </>
  );
};

export default App;

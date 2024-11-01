import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
const App = () => {
  return (
    <>
      <div className="todo_container">
        <div className="todo_title">Todo List</div>
        <TodoNew />
        <TodoData />
        <div className="todo_image">
          <img src={reactLogo} alt="" className="logo react" />
        </div>
      </div>
    </>
  );
};

export default App;

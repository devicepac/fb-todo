import "./App.css";
import { useState } from "react";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  // 더미 데이터 일반변수
  const [todoData, setTodoData] = useState([
    { id: 1, title: "Blue Achive", completed: false },
    { id: 2, title: "Maple Story", completed: false },
    { id: 3, title: "Sudden Attack", completed: false },
    { id: 4, title: "Metal Rage", completed: false },
  ]);
  return (
    <div className="container">
      <div className="todo-block">
        <div className="title">
          <h1>할일목록</h1>
        </div>
        {/* 할일 목록 */}
        <List todoData={todoData} setTodoData={setTodoData} />
        {/* 할일 추가 */}
        <Form todoData={todoData} setTodoData={setTodoData} />
      </div>
    </div>
  );
}

export default App;

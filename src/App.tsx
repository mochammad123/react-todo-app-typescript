import { useState } from "react";
import { IDataTodo } from "./interface";
import { todoData } from "./data/todosData";
import Todos from "./components/Todos";

const App = () => {
  const toggleCompleted = (id: number) => {
    const updatedTodos = todos.map((todo: IDataTodo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const [todos, setTodos] = useState<IDataTodo[]>(todoData);
  console.log(todos);
  return (
    <div className="text-center p-[12px]">
      <h1 className="text-[36px] font-bold">My Todo List</h1>
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;

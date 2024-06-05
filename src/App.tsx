import { useState } from "react";
import { IDataTodo } from "./interface";
import { todoData } from "./data/todosData";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState<IDataTodo[]>(todoData);
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

  const addTodo = (todoTitle: string) => {
    if (todoTitle === "") {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };
    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };

  return (
    <div className="text-center p-[12px]">
      <h1 className="text-[36px] font-bold">My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;

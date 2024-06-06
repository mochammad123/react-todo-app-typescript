import { createContext, useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";
import { IDataTodo } from "../interface";
import { todoData } from "../data/todosData";

export const TodoContext = createContext<{
  toggleCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
  addTodo: (title: string) => void;
  updateTodo: (id: number, title: string) => void;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  dataEdit: IDataTodo;
  setDataEdit: React.Dispatch<React.SetStateAction<IDataTodo>>;
}>({
  toggleCompleted: () => {},
  deleteTodo: () => {},
  addTodo: () => {},
  updateTodo: () => {},
  show: false,
  setShow: () => {},
  dataEdit: { id: 0, completed: false, title: "" },
  setDataEdit: () => {},
});
const Todo = () => {
  const [todos, setTodos] = useState<IDataTodo[]>(todoData);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] =
    useState<string>(searchQuery);
  const [show, setShow] = useState<boolean>(false);
  const [dataEdit, setDataEdit] = useState<IDataTodo>({
    id: 0,
    completed: false,
    title: "",
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

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

  const updateTodo = (id: number, title: string) => {
    const updatedTodos = todos.map((todo: IDataTodo) => {
      if (todo.id === id) return { ...todo, title };
      return todo;
    });
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  const completedTodos = filteredTodos.filter((todo) => todo.completed);
  const uncompletedTodos = filteredTodos.filter((todo) => !todo.completed);

  return (
    <TodoContext.Provider
      value={{
        toggleCompleted,
        deleteTodo,
        addTodo,
        updateTodo,
        show,
        setShow,
        dataEdit,
        setDataEdit,
      }}
    >
      <div className=" p-[12px]">
        <h1 className="text-center text-[36px] font-bold text-[#9E78CF]">
          My Todo List
        </h1>
        <TodoForm setSearchQuery={setSearchQuery} />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="w-full">
            <Todos todos={uncompletedTodos} title="On Progress" />
          </div>
          <div className="w-full">
            <Todos todos={completedTodos} title="Done" />
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  );
};

export default Todo;

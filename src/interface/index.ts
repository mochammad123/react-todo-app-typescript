export interface IDataTodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodos {
  todos: IDataTodo[];
  toggleCompleted: (id: number) => void;
}

export interface ITodo {
  todo: IDataTodo;
  toggleCompleted: (id: number) => void;
}

export interface IDataTodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodos {
  todos: IDataTodo[];
}

export interface ITodo {
  todo: IDataTodo;
}

export interface IAddTodo {
  addTodo: (title: string) => void;
}

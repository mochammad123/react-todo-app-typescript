import { ChangeEvent, FormEvent } from "react";

export interface IDataTodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodos {
  todos: IDataTodo[];
  title: string;
}

export interface ITodo {
  todo: IDataTodo;
}

export interface IButtonCard {
  icon: React.ReactNode;
  handleSubmit?: () => void;
}

export interface ITodoForm {
  setSearchQuery: (query: string) => void;
}

export interface IModal {
  show: boolean;
  setShow: () => void;
  name: string;
  onSave?: (e: FormEvent) => void;
  children?: React.ReactNode;
}

export interface IModalSubmit extends Pick<IModal, "show" | "setShow"> {}

export interface IChangeEvent {
  changeEvent: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value?: string;
  search: boolean;
}

export interface IModal {
  show: boolean;
  setShow: () => void;
  name: string;
  onSave?: (e: FormEvent) => void;
  children?: React.ReactNode;
  nameButton?: string;
}

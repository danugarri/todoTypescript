import { Todo } from "./todos.model";

export type CheckInputParams = {
    enteredText:string;
    addTodoHandler: Function;
    todos: Todo[];
};
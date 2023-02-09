export interface TodoState {
  todos: TodoItem[];
  loading: boolean,
  error: null | string,
}

export enum TodoActionTypes {
  FETCH_TODO = 'FETCH_TODO',
  FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
  FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
  DELETE_ONE_TODO = 'DELETE_ONE_TODO',
  CHANGE_ONE_TODO = 'CHANGE_ONE_TODO',
}

export interface TodoItem {
  id: number;
  title: string;
}

interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODO
}

interface FetchTodoActionSuccess {
  type: TodoActionTypes.FETCH_TODO_SUCCESS,
  payload: TodoItem[]
}

interface FetchTodoActionError {
  type: TodoActionTypes.FETCH_TODO_ERROR,
  payload: string
}

interface DeleteTodo {
  type: TodoActionTypes.DELETE_ONE_TODO,
  payload: number
}

interface ChangeTodo {
  type: TodoActionTypes.CHANGE_ONE_TODO,
  payload: TodoItem
}

export type TodoAction = 
  FetchTodoAction
  | FetchTodoActionSuccess
  | FetchTodoActionError
  | DeleteTodo
  | ChangeTodo
import { TodoAction, TodoActionTypes, TodoState } from "../../types/todoTypes"

const defaultUserState: TodoState = {
  todos: [],
  loading: false,
  error: null,
}

export const todoReducer = (state: TodoState = defaultUserState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODO:
      return {...state, loading: true}
    case TodoActionTypes.FETCH_TODO_SUCCESS:
      return {...state, loading: false, todos: action.payload}
    case TodoActionTypes.FETCH_TODO_ERROR:
      return {...state, loading: false, error: 'Произошла ошибка при загрузке списка задач'}
    case TodoActionTypes.DELETE_ONE_TODO:
      return {...state, todos: [...state.todos.filter(todo => todo.id !== action.payload)]}
    case TodoActionTypes.CHANGE_ONE_TODO:
      return {...state, todos: [...state.todos.map(obj => {
        if(obj.id === action.payload.id) {
          return action.payload
        }
        return obj
      }) ]}
    default:
      return state
  }
}
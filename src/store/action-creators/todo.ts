import { Dispatch } from "redux"
import { TodoAction, TodoActionTypes, TodoItem } from "../../types/todoTypes"
import axios from "axios"

export const fetchTodo = (activePage = 1, limit = 10) => {
  return async function (dispatch: Dispatch<TodoAction>) {
    try {
      dispatch({type: TodoActionTypes.FETCH_TODO})
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {_page: activePage, _limit: limit}
      })
      dispatch({type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: res.data})
    } catch (err) {
      dispatch({type: TodoActionTypes.FETCH_TODO_ERROR, payload: 'Произошла ошибка при загрузке списка задач.'})
    }
  }
}

export const deleteTodo = (dispatch: Dispatch<TodoAction>, id: number) => {
  dispatch({type: TodoActionTypes.DELETE_ONE_TODO, payload: id})
}

export const changeTodo = (dispatch: Dispatch<TodoAction>, todoObj: TodoItem) => {
  dispatch({type: TodoActionTypes.CHANGE_ONE_TODO, payload: todoObj})
}
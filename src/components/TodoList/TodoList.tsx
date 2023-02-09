import React, {FC, useEffect} from "react"
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { deleteTodo, fetchTodo } from "../../store/action-creators/todo";
import { useAppSelector } from "../../hooks/useAppSelector";
import { showModal } from "../../store/action-creators/modal";
import { TodoItem } from "../../types/todoTypes";
//Styles
import styles from './todolist.module.scss';
import classnames from 'classnames/bind';
const cn = classnames.bind(styles);

interface TodoListProps {
  
}

const TodoList: FC<TodoListProps>= () => {
  const {error, loading, todos} = useAppSelector(state => state.todo)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    fetchTodo()(dispatch)
  }, []);

  const handleShow = (obj: TodoItem) => {
    showModal(dispatch, obj)
  }

  if(loading) {
    return <div>Идет загрузка</div>
  }
  if(error) {
    return <div>{error}</div>
  }

  return (
    <div className={cn('todo')}>
      <h2 className={cn('todo__title')}>Список задач</h2>
      <ListGroup className={cn('todo__list')}>
        {todos.map(todo => 
        <ListGroup.Item className={'d-flex justify-content-between'} key={todo.id}>
          {todo.id}.{' '}
          {todo.title}
          <div className={cn('todo__btns')}>
            <Button onClick={() => handleShow(todo)} variant="primary">Изменить</Button>
            <Button onClick={() => deleteTodo(dispatch, todo.id)} variant="danger">Удалить</Button>
          </div>
        </ListGroup.Item>)}
      </ListGroup>
    </div>
  )
}

export default TodoList
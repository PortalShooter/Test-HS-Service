import { Dispatch } from "redux";
import { ModalAction, ModalActionTypes } from "../../types/modalTypes";
import { TodoItem } from "../../types/todoTypes";

export function showModal(dispatch: Dispatch<ModalAction>, data: TodoItem) {
  dispatch({type: ModalActionTypes.SET_DATA, payload: data})
  dispatch({type: ModalActionTypes.SHOW_MODAL})
}

export function hideModal(dispatch: Dispatch<ModalAction>) {
  dispatch({type: ModalActionTypes.SET_DATA, payload: null})
  dispatch({type: ModalActionTypes.HIDE_MODAL})
}
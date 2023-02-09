import { ModalAction, ModalActionTypes, ModalState } from "../../types/modalTypes"

const defaultUserState: ModalState = {
  inputList: null,
  showModal: false,
}

export const modalReducer = (state: ModalState = defaultUserState, action: ModalAction): ModalState => {
  switch (action.type) {
    case ModalActionTypes.SHOW_MODAL:
      return {...state, showModal: true}
    case ModalActionTypes.HIDE_MODAL:
      return {...state, showModal: false}
    case ModalActionTypes.SET_DATA:
      return {...state, inputList: action.payload}
    default:
      return state
  }
}
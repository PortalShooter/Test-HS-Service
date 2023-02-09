import { TodoItem } from "./todoTypes";

export interface ModalState {
  inputList: TodoItem | null;
  showModal: boolean;
}

export enum ModalActionTypes {
  SHOW_MODAL = 'SHOW_MODAL',
  HIDE_MODAL = 'HIDE_MODAL',
  SET_DATA = 'SET_DATA',
}

interface ShowModal {
  type: ModalActionTypes.SHOW_MODAL
}

interface HideModal {
  type: ModalActionTypes.HIDE_MODAL
}

interface SetDataForChange {
  type: ModalActionTypes.SET_DATA,
  payload: null | TodoItem,
}

export type ModalAction =
  ShowModal
  | HideModal
  | SetDataForChange
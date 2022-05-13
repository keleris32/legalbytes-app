import { MockDataType } from '../../data/mock';

export enum ActionType {
  GET_SELECTED_CASE = 'GET_SELECTED_CASE',
}

interface getSelectedCaseAction {
  type: ActionType.GET_SELECTED_CASE;
  payload: MockDataType;
}

export type Action = getSelectedCaseAction;

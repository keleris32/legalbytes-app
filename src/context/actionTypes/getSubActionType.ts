export enum ActionType {
  GET_SUB = 'GET_SUB',
}

interface getSubAction {
  type: ActionType.GET_SUB;
  payload: boolean;
}

export type Action = getSubAction;

import { User } from '../../../types/user';

export enum ActionType {
  LOGIN_PENDING = 'LOGIN_PENDING',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
}

interface actionPending {
  type: ActionType.LOGIN_PENDING;
}

interface actionSuccess {
  type: ActionType.LOGIN_SUCCESS;
  payload: User;
}

interface actionFail {
  type: ActionType.LOGIN_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;

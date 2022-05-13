import { User } from '../../types/user';

export enum ActionType {
  GET_USER = 'GET_USER',
}

interface getUserAction {
  type: ActionType.GET_USER;
  payload: User;
}

export type Action = getUserAction;

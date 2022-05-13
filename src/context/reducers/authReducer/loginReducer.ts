import { User } from '../../../types/user';
import {
  Action,
  ActionType,
} from '../../actionTypes/authActionTypes/loginActionTypes';

interface LoginState {
  userData: User;
  loading: boolean;
  error: string | null;
}

export const loginInitialState = {
  userData: {},
  loading: false,
  error: null,
};

export const loginReducer = (
  state: LoginState = loginInitialState,
  action: Action,
) => {
  switch (action.type) {
    case ActionType.LOGIN_PENDING:
      return {
        ...state,
        loading: true,
      };

    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };

    case ActionType.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

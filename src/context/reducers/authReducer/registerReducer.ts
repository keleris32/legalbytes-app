import { User } from '../../../types/user';
import {
  Action,
  ActionType,
} from '../../actionTypes/authActionTypes/registerActionTypes';

interface RegisterState {
  userData: User;
  loading: boolean;
  error: string | null;
}

export const registerInitialState = {
  userData: {},
  loading: false,
  error: null,
};

export const registerReducer = (
  state: RegisterState = registerInitialState,
  action: Action,
) => {
  switch (action.type) {
    case ActionType.REGISTER_PENDING:
      return {
        ...state,
        loading: true,
      };

    case ActionType.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };

    case ActionType.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

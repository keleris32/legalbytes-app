import { Action, ActionType } from '../actionTypes/authActionType';

interface AuthState {
  state: boolean;
}

export const authInitialState = {
  state: false,
};

export const authReducer = (
  state: AuthState = authInitialState,
  action: Action,
) => {
  switch (action.type) {
    case ActionType.AUTHENTICATE:
      return {
        state: true,
      };

    case ActionType.DEAUTHENTICATE:
      return {
        state: false,
      };

    default:
      return state;
  }
};

import { Action, ActionType } from '../actionTypes/getUserActionType';

interface UserState {
  data: {};
}

export const getUserInitialState = {
  data: {},
};

export const getUserReducer = (
  state: UserState = getUserInitialState,
  action: Action,
) => {
  switch (action.type) {
    case ActionType.GET_USER:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};

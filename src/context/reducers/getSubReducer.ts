import { Action, ActionType } from '../actionTypes/getSubActionType';

interface SubState {
  data: boolean;
}

export const getSubInitialState = {
  data: false,
};

export const getSubReducer = (
  state: SubState = getSubInitialState,
  action: Action,
) => {
  switch (action.type) {
    case ActionType.GET_SUB:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};

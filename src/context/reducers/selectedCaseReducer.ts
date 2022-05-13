import { MockDataType } from '../../data/mock';
import { Action, ActionType } from '../actionTypes/selectedCaseActionType';

type State = {
  data: MockDataType | {};
};

export const selectedCaseInitialState = {
  data: {},
};

export const selectedCaseReducer = (
  state: State = selectedCaseInitialState,
  action: Action,
) => {
  switch (action.type) {
    case ActionType.GET_SELECTED_CASE:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};

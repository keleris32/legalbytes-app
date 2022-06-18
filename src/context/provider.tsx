import React, { createContext, useReducer } from 'react';

import { authInitialState, authReducer } from './reducers/authReducer';
import {
  loginInitialState,
  loginReducer,
} from './reducers/authReducer/loginReducer';
import {
  registerInitialState,
  registerReducer,
} from './reducers/authReducer/registerReducer';
import { getSubInitialState, getSubReducer } from './reducers/getSubReducer';
import { getUserInitialState, getUserReducer } from './reducers/getUserReducer';
import {
  selectedCaseInitialState,
  selectedCaseReducer,
} from './reducers/selectedCaseReducer';

export const GlobalContext = createContext<any>(null);

const GlobalProvider: React.FC = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    loginInitialState,
  );
  const [registerState, registerDispatch] = useReducer(
    registerReducer,
    registerInitialState,
  );
  const [getUserState, getUserDispatch] = useReducer(
    getUserReducer,
    getUserInitialState,
  );

  const [getSubState, getSubDispatch] = useReducer(
    getSubReducer,
    getSubInitialState,
  );
  const [selectedCaseState, selectedCaseDispatch] = useReducer(
    selectedCaseReducer,
    selectedCaseInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{
        loginState,
        loginDispatch,
        registerState,
        registerDispatch,
        authState,
        authDispatch,
        getUserState,
        getUserDispatch,
        selectedCaseState,
        selectedCaseDispatch,
        getSubState,
        getSubDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

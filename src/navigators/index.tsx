import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

import AuthNavigator from './AuthNavigator';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabNavigator from './TabNavigator';
import { GlobalContext } from '../context/provider';
import { ActionType } from '../context/actionTypes/authActionType';
import { ActionType as UserActionType } from '../context/actionTypes/getUserActionType';

const AppNavContainer = () => {
  const [isAuthLoaded, setIsAuthLoaded] = useState<boolean>(false);
  // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const { authState, authDispatch, getUserDispatch } =
    useContext(GlobalContext);

  const getUserData = async (): Promise<void> => {
    try {
      const user = await AsyncStorage.getItem('userData');

      if (user) {
        const parsedData = JSON.parse(user);

        getUserDispatch({
          type: UserActionType.GET_USER,
          payload: parsedData,
        });

        authDispatch({
          type: ActionType.AUTHENTICATE,
        });

        setIsAuthLoaded(true);
      } else {
        authDispatch({
          type: ActionType.DEAUTHENTICATE,
        });

        setIsAuthLoaded(true);
      }
    } catch {}
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState.state]);

  useEffect(() => {
    if (isAuthLoaded) {
      SplashScreen.hide();
    }
  }, [isAuthLoaded]);

  return (
    <>
      {isAuthLoaded ? (
        <NavigationContainer>
          {authState.state ? <TabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavContainer;

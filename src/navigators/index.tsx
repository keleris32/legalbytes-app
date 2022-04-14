import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

import AuthNavigator from './AuthNavigator';
import SplashScreen from 'react-native-splash-screen';

const AppNavContainer = () => {
  const [isAuthLoaded, setIsAuthLoaded] = useState<boolean>(false);

  const handleAuthLoaded = () => setIsAuthLoaded(true);

  useEffect(() => {
    setInterval(() => {
      handleAuthLoaded();
    }, 5000);
  }, []);

  useEffect(() => {
    if (isAuthLoaded) {
      SplashScreen.hide();
    }
  }, [isAuthLoaded]);

  return (
    <>
      {isAuthLoaded ? (
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavContainer;

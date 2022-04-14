import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SplashScreen, Onboarding } from '../screens';
import { AuthNav } from '../enums/authNavigator';
// import { SPLASH_SCREEN } from '../constants/routeNames';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AuthNav.SPLASH_SCREEN}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AuthNav.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={AuthNav.ONBOARDING} component={Onboarding} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

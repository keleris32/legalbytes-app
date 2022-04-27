import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Onboarding, Login, ForgotPassword } from '../screens';
import { AuthNav } from '../enums/authNavigator';
import { AuthNavigatorList } from '../types/authNavigator';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator<AuthNavigatorList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AuthNav.ONBOARDING}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AuthNav.ONBOARDING} component={Onboarding} />
      <Stack.Screen name={AuthNav.LOGIN} component={Login} />
      <Stack.Screen name={AuthNav.SIGN_UP} component={SignUp} />
      <Stack.Screen name={AuthNav.FORGOT_PASSWORD} component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

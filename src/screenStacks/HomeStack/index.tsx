import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Case, SubscriptionPlans } from '../../screens';
import { HomeStackNav } from '../../enums/homeStackNavigator';
import { HomeStackNavigatorList } from '../../types/navigators/homeStackNavigator';
import { CustomTabNavHeaderTitle } from '../../components/CustomTabNavHeader';
import { COLORS } from '../../constants';

const Stack = createStackNavigator<HomeStackNavigatorList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={HomeStackNav.FEED}>
      <Stack.Screen
        name={HomeStackNav.FEED}
        component={Home}
        options={{
          headerTitle: () => <CustomTabNavHeaderTitle />,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <Stack.Screen
        name={HomeStackNav.STATUE}
        component={Case}
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.light,
        }}
      />
      <Stack.Screen
        name={HomeStackNav.CASE}
        component={Case}
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.light,
        }}
      />
      <Stack.Screen
        name={HomeStackNav.PLANS}
        component={SubscriptionPlans}
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.light,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

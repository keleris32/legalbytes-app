import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { History, Case } from '../../screens';
import { HistoryStackNav } from '../../enums/historyStackNavigator';
import { HistoryStackNavigatorList } from '../../types/navigators/historyStackNavigator';
import { CustomTabNavHeaderTitle } from '../../components/CustomTabNavHeader';
import { COLORS } from '../../constants';

const Stack = createStackNavigator<HistoryStackNavigatorList>();

const HistoryStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={HistoryStackNav.HISTORY}>
      <Stack.Screen
        name={HistoryStackNav.HISTORY}
        component={History}
        options={{
          headerTitle: () => <CustomTabNavHeaderTitle />,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <Stack.Screen
        name={HistoryStackNav.CASE}
        component={Case}
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

export default HistoryStackNavigator;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Search, Result, Case } from '../../screens';
import { SearchStackNav } from '../../enums/searchStackNavigator';
import { SearchStackNavigatorList } from '../../types/navigators/searchStackNavigator';
import { CustomTabNavHeaderTitle } from '../../components/CustomTabNavHeader';
import { COLORS } from '../../constants';

const Stack = createStackNavigator<SearchStackNavigatorList>();

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={SearchStackNav.SEARCH}>
      <Stack.Screen
        name={SearchStackNav.SEARCH}
        component={Search}
        options={{
          headerTitle: () => <CustomTabNavHeaderTitle />,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <Stack.Screen
        name={SearchStackNav.RESULT}
        component={Result}
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.light,
        }}
      />
      <Stack.Screen
        name={SearchStackNav.CASE}
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

export default SearchStackNavigator;

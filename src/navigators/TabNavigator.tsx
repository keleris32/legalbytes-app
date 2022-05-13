import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Iconicons from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { TabNavigatorList } from '../types/navigators/tabNavigator';
import { TabNav } from '../enums/tabNavigator';
import { Profile } from '../screens';
import { COLORS, FONTS, SIZES } from '../constants';
import { Platform } from 'react-native';
import {
  HomeStackNavigator,
  SearchStackNavigator,
  HistoryStackNavigator,
} from '../screenStacks';
import { CustomTabNavHeaderTitle } from '../components/CustomTabNavHeader';

const Tab = createBottomTabNavigator<TabNavigatorList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: COLORS.dark,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          marginBottom: hp('1%'),
          marginTop: hp('-0.25%'),
          ...FONTS.body5,
        },
        tabBarStyle: {
          height:
            Platform.OS === 'ios' && SIZES.height > 700 ? hp('15%') : hp('9%'),
        },
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case TabNav.HOME:
              return (
                <Iconicons
                  name="home-outline"
                  style={{ fontSize: hp('4%') }}
                  color={color}
                />
              );
            case TabNav.SEARCH:
              return (
                <Iconicons
                  name="search"
                  style={{ fontSize: hp('4%') }}
                  color={color}
                />
              );
            case TabNav.HISTORY:
              return (
                <MaterialIcon
                  name="history"
                  style={{ fontSize: hp('4%') }}
                  color={color}
                />
              );
            case TabNav.PROFILE:
              return (
                <FeatherIcon
                  name="user"
                  style={{ fontSize: hp('4%') }}
                  color={color}
                />
              );
            default:
              return;
          }
        },
      })}>
      <Tab.Screen
        name={TabNav.HOME}
        component={HomeStackNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={TabNav.SEARCH}
        component={SearchStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={TabNav.HISTORY}
        component={HistoryStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={TabNav.PROFILE}
        component={Profile}
        options={{
          headerTitle: () => <CustomTabNavHeaderTitle />,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

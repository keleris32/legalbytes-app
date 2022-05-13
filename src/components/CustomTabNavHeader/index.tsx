import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import LogoutIcon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
// import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { COLORS, FONTS, SIZES } from '../../constants';
import { GlobalContext } from '../../context/provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActionType } from '../../context/actionTypes/authActionType';

export const CustomTabNavHeaderTitle = () => {
  const { authDispatch } = useContext(GlobalContext);

  const logoutUser = (): void => {
    AsyncStorage.removeItem('userData');

    authDispatch({
      type: ActionType.DEAUTHENTICATE,
    });
  };

  const handleLogout = (): void => {
    Alert.alert('Log Out!', 'Are you sure you want to log out?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Confirm',
        onPress: () => {
          logoutUser();
        },
      },
    ]);
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon
          name="balance-scale"
          style={{
            fontSize: SIZES.padding,
            color: COLORS.light,
            marginRight: SIZES.base,
          }}
        />
        <Text style={{ color: COLORS.light, ...FONTS.h4 }}>LegalBytes</Text>
      </View>
      <TouchableOpacity activeOpacity={0.3} onPress={handleLogout}>
        <LogoutIcon
          name="logout"
          style={{ color: COLORS.light, fontSize: SIZES.padding }}
        />
      </TouchableOpacity>
    </View>
  );
};

export const CustomTabNavHeaderBackground = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    />
  );
};

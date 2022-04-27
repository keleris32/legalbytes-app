import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text } from 'react-native';
// import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { COLORS, FONTS, SIZES } from '../../constants';

export const CustomTabNavHeaderTitle = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
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

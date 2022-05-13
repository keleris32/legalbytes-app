import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  // widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { COLORS, FONTS, SIZES } from '../../constants';

interface Props {
  onPress: () => void;
  disabled: boolean;
  text: string;
}

const CustomButton = ({ onPress, disabled, text }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: disabled ? COLORS.grey : COLORS.primary },
      ]}
      activeOpacity={0.6}
      onPress={onPress}
      disabled={disabled}>
      {disabled ? (
        <ActivityIndicator color={COLORS.primary} size="large" />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius,
    height: hp('7.5%'),
    width: '100%',
    marginTop: SIZES.radius,
  },

  text: {
    color: COLORS.light,
    ...FONTS.h4,
  },
});

import React from 'react';
import {
  // KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
// import Icons from 'react-native-vector-icons/FontAwesome';
import PasswordIcon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  // heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { COLORS, FONTS, SIZES } from '../../constants';

// interface Props {
//   placeholder: string;
//   keyboardType: KeyboardTypeOptions | undefined;
// }

const CustomInput = ({ placeholder, keyboardType, ...props }: any) => {
  return (
    <View style={styles.container}>
      <TextInput
        underlineColorAndroid="transparent"
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={COLORS.grey}
        {...props}
        style={styles.input}
      />
      {placeholder === 'Password' && (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => props.setIsPasswordHidden(!props.isPasswordHidden)}>
          <PasswordIcon
            name={props.isPasswordHidden ? 'eye-off' : 'eye'}
            style={styles.passwordIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: SIZES.base / 2,
    paddingHorizontal: SIZES.radius,
    // paddingVertical: SIZES.base / 10,
    marginVertical: SIZES.radius,
    backgroundColor: COLORS.lightBlue,
    borderColor: COLORS.grey,
  },

  input: {
    flex: 1,
    color: COLORS.dark,
    ...FONTS.h4,
  },

  passwordIcon: {
    fontSize: wp('5%'),
    color: COLORS.dark,
  },
});

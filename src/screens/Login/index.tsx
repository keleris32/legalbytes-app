import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { AuthNavigatorList } from '../../types/authNavigator';
import { AuthNav } from '../../enums/authNavigator';
import { COLORS, icons, SIZES, FONTS } from '../../constants';
import { CustomButton, CustomInput } from '../../components';

type Props = NativeStackScreenProps<AuthNavigatorList, AuthNav.LOGIN>;

const Login = ({ navigation }: Props) => {
  const navigateToForgotPassword = (): void =>
    navigation.push(AuthNav.FORGOT_PASSWORD);

  const navigateToSignUp = (): void => navigation.push(AuthNav.SIGN_UP);

  const loading: boolean = false;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={true}
      contentContainerStyle={{
        flexGrow: 1,
      }}>
      <View style={styles.container}>
        <Image source={icons.legalBytes} style={styles.logo} />

        <View style={styles.form}>
          <CustomInput keyboardType="email-address" placeholder="Email" />

          <CustomInput keyboardType="default" placeholder="Password" />
          <TouchableOpacity
            onPress={navigateToForgotPassword}
            activeOpacity={0.3}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          <View style={{ marginVertical: SIZES.radius }}>
            <CustomButton
              text="Login"
              disabled={loading}
              onPress={navigateToSignUp}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ ...FONTS.h4 }}>Not Registered?</Text>
            <TouchableOpacity activeOpacity={0.3} onPress={navigateToSignUp}>
              <Text
                style={{
                  paddingHorizontal: SIZES.base / 2,
                  color: COLORS.secondary,
                  ...FONTS.h4,
                }}>
                Sign Up!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: wp('5%'),
  },

  logo: {
    resizeMode: 'contain',
    width: wp('70%'),
    height: hp('17.5%'),
  },

  form: {
    width: wp('80%'),
    marginVertical: SIZES.largeSize * 2,
  },

  forgotPassword: {
    alignSelf: 'flex-end',
    color: COLORS.secondary,
    ...FONTS.h4,
  },
});

import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { AuthNav } from '../../enums/authNavigator';
import { AuthNavigatorList } from '../../types/authNavigator';
import { COLORS, SIZES, FONTS, icons } from '../../constants';
import { CustomButton, CustomInput, CustomModal } from '../../components';

type Props = NativeStackScreenProps<AuthNavigatorList, AuthNav.SIGN_UP>;

const SignUp = ({ navigation }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const toggleModal = (): void => setIsModalVisible(!isModalVisible);

  const navigateToLogin = (): void => navigation.navigate(AuthNav.LOGIN);

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
          <CustomInput placeholder="First Name" keyboardType="default" />
          <CustomInput placeholder="Last Name" keyboardType="default" />
          <CustomInput placeholder="Mobile Number" keyboardType="phone-pad" />
          <CustomInput placeholder="Email" keyboardType="email-address" />
          <TouchableOpacity onPress={toggleModal}>
            <CustomModal
              toggleModal={toggleModal}
              isModalVisible={isModalVisible}
            />
          </TouchableOpacity>
          <CustomInput placeholder="Password" keyboardType="default" />
          <CustomInput placeholder="Password" keyboardType="default" />
          <View style={{ marginVertical: SIZES.radius }}>
            <CustomButton
              text="Sign Up"
              disabled={false}
              onPress={navigateToLogin}
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ ...FONTS.h4 }}>Already have an account?</Text>
            <TouchableOpacity activeOpacity={0.3} onPress={navigateToLogin}>
              <Text
                style={{
                  paddingHorizontal: SIZES.base / 2,
                  color: COLORS.secondary,
                  ...FONTS.h4,
                }}>
                Login!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.margin,
    backgroundColor: COLORS.light,
  },

  logo: {
    resizeMode: 'contain',
    width: wp('70%'),
    height: hp('15%'),
  },

  form: {
    width: wp('80%'),
    marginVertical: SIZES.largeSize,
  },
});

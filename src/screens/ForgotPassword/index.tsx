import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { AuthNav } from '../../enums/authNavigator';
import { AuthNavigatorList } from '../../types/authNavigator';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { FONTS, COLORS, SIZES } from '../../constants';
import { CustomButton, CustomInput } from '../../components';

type Props = NativeStackScreenProps<AuthNavigatorList, AuthNav.FORGOT_PASSWORD>;

const ForgotPassword = ({ navigation }: Props) => {
  const goBackToPreviousScreen = (): void => navigation.navigate(AuthNav.LOGIN);

  const loading = false;
  const dummyFn = () => console.log('Reset Btn');

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={true}
      contentContainerStyle={{
        flexGrow: 1,
      }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ position: 'absolute', top: hp('5%'), left: wp('2.5%') }}
          onPress={goBackToPreviousScreen}>
          <Icon
            name="chevron-left"
            style={{ fontSize: hp('5%'), color: COLORS.dark }}
          />
        </TouchableOpacity>
        <View style={{ width: wp('80%') }}>
          <View style={{ marginBottom: SIZES.padding }}>
            <Text style={{ color: COLORS.dark, ...FONTS.h1 }}>
              Password Recovery
            </Text>
          </View>
          <CustomInput
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <View style={{ alignItems: 'center' }}>
            <CustomButton
              text="Reset password"
              disabled={loading}
              onPress={dummyFn}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.light,
  },
});

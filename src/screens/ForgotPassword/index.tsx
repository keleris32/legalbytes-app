import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { AuthNav } from '../../enums/authNavigator';
import { AuthNavigatorList } from '../../types/navigators/authNavigator';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { FONTS, COLORS, SIZES } from '../../constants';
import { CustomButton, CustomInput } from '../../components';
import { Formik, FormikState } from 'formik';
import ToastManager, { Toast } from 'toastify-react-native';
import { forgotPasswordValidationSchema } from './validationSchema';
import axiosInstance from '../../config/axiosInterceptor';

type Props = NativeStackScreenProps<AuthNavigatorList, AuthNav.FORGOT_PASSWORD>;

type resetFormType = {
  (nextState?: Partial<FormikState<{ email: string }>> | undefined): void;
  (): void;
};

const ForgotPassword = ({ navigation }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const goBackToPreviousScreen = (): void => navigation.navigate(AuthNav.LOGIN);

  const submitForm = async (
    formData: { email: string },
    resetForm: resetFormType,
  ): Promise<void> => {
    const email = formData.email;

    try {
      setLoading(true);

      const response = await axiosInstance.post('/auth/password/forgot', {
        email,
      });

      Alert.alert('Success!', response.data.message, [
        {
          text: 'Ok',
          onPress: () => {
            setLoading(false);

            resetForm();

            goBackToPreviousScreen();
          },
        },
      ]);
    } catch (error) {
      Toast.error("We can't find a user to match this Email!");

      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: '' }}
      validateOnMount={true}
      onSubmit={(values, { resetForm }) => {
        submitForm(values, resetForm);
      }}
      validationSchema={forgotPasswordValidationSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
      }) => (
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={true}
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <View style={styles.container}>
            <ToastManager width={wp('80%')} positionValue={hp('0%')} />
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
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email.trim()}
                errors={errors.email}
                touched={touched.email}
              />
              {/* If this field contains an error and it has been touched, then display the error message */}
              {errors.email && touched.email && (
                <Text style={styles.errors}>{errors.email}</Text>
              )}

              <View style={{ alignItems: 'center' }}>
                <CustomButton
                  text="Reset password"
                  disabled={loading}
                  onPress={handleSubmit}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
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

  errors: {
    marginBottom: SIZES.radius,
    color: COLORS.error,
    ...FONTS.h4,
  },
});

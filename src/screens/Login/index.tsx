import React, { useContext, useEffect, useState } from 'react';
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
import { Formik, FormikState } from 'formik';
import ToastManager, { Toast } from 'toastify-react-native';

import { AuthNavigatorList } from '../../types/navigators/authNavigator';
import { AuthNav } from '../../enums/authNavigator';
import { COLORS, icons, SIZES, FONTS } from '../../constants';
import { CustomButton, CustomInput } from '../../components';
import { GlobalContext } from '../../context/provider';
import loginActions from '../../context/actions/authActions/loginActions';
import { loginValidationSchema } from './validationSchema';

type Props = NativeStackScreenProps<AuthNavigatorList, AuthNav.LOGIN>;

type formType = { email: string; password: string };

type resetFormType = {
  (
    nextState?:
      | Partial<FormikState<{ email: string; password: string }>>
      | undefined,
  ): void;
  (): void;
};

const Login = ({ navigation }: Props) => {
  const {
    authDispatch,
    loginDispatch,
    loginState: { error, loading },
  } = useContext(GlobalContext);

  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);

  const navigateToForgotPassword = (): void =>
    navigation.push(AuthNav.FORGOT_PASSWORD);

  const navigateToSignUp = (): void => navigation.push(AuthNav.SIGN_UP);

  const submitForm = (formData: formType, resetForm: resetFormType): void => {
    loginActions(formData)(loginDispatch, authDispatch);

    if (!formData) {
      resetForm();
    }
  };

  useEffect(() => {
    if (error) {
      Toast.error(error);
    }
  }, [error]);

  // const loading: boolean = false;

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validateOnMount={true}
      onSubmit={(values, { resetForm }) => {
        submitForm(values, resetForm);
      }}
      validationSchema={loginValidationSchema}>
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
            <Image source={icons.legalBytes} style={styles.logo} />

            <View style={styles.form}>
              <CustomInput
                keyboardType="email-address"
                placeholder="Email"
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

              <CustomInput
                keyboardType="default"
                placeholder="Password"
                secureTextEntry={isPasswordHidden}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password.trim()}
                errors={errors.password}
                touched={touched.password}
                isPasswordHidden={isPasswordHidden}
                setIsPasswordHidden={setIsPasswordHidden}
              />
              {/* If this field contains an error and it has been touched, then display the error message */}
              {errors.password && touched.password && (
                <Text style={styles.errors}>{errors.password}</Text>
              )}

              <TouchableOpacity
                onPress={navigateToForgotPassword}
                activeOpacity={0.3}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>

              <View style={{ marginVertical: SIZES.radius }}>
                <CustomButton
                  text="Login"
                  disabled={loading}
                  onPress={handleSubmit}
                />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ ...FONTS.h4 }}>Not Registered?</Text>
                <TouchableOpacity
                  activeOpacity={0.3}
                  onPress={navigateToSignUp}>
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
      )}
    </Formik>
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

  errors: {
    marginBottom: SIZES.radius,
    color: COLORS.error,
    ...FONTS.h4,
  },
});

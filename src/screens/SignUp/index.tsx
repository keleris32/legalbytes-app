import React, { useContext, useEffect, useState } from 'react';
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
import { Formik } from 'formik';
import ToastManager, { Toast } from 'toastify-react-native';

import { AuthNav } from '../../enums/authNavigator';
import { AuthNavigatorList } from '../../types/navigators/authNavigator';
import { COLORS, SIZES, FONTS, icons } from '../../constants';
import { CustomButton, CustomInput, CustomModal } from '../../components';
import { GlobalContext } from '../../context/provider';
import { signUpValidationSchema } from './validationSchema';
import registerActions from '../../context/actions/authActions/registerActions';

type Props = NativeStackScreenProps<AuthNavigatorList, AuthNav.SIGN_UP>;

export type FormType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  identity: string;
};

const SignUp = ({ navigation }: Props) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);
  const [isPasswordConfirmHidden, setIsPasswordConfirmHidden] =
    useState<boolean>(true);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedUserIdentity, setSelectedUserIdentity] = useState<string>(
    'Please select an identity',
  );

  const {
    authDispatch,
    registerDispatch,
    registerState: { error, loading },
  } = useContext(GlobalContext);

  const toggleModal = (): void => setIsModalVisible(!isModalVisible);

  const navigateToLogin = (): void => navigation.navigate(AuthNav.LOGIN);

  const submitForm = (formData: FormType): void => {
    if (selectedUserIdentity === 'Please select an identity') {
      Toast.error('Please complete all fields before proceeding');
      return;
    }

    if (formData.password !== formData.passwordConfirmation) {
      Toast.error("The entered passwords don't match");
      return;
    }

    formData.identity = selectedUserIdentity;

    registerActions(formData)(registerDispatch, authDispatch);
  };

  useEffect(() => {
    if (error) {
      Toast.error(error);
    }
  }, [error]);

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        identity: '',
      }}
      validateOnMount={true}
      onSubmit={values => {
        submitForm(values);
      }}
      validationSchema={signUpValidationSchema}>
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
                placeholder="First Name"
                keyboardType="default"
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
                errors={errors.firstName}
                touched={touched.firstName}
              />
              {/* If this field contains an error and it has been touched, then display the error message */}
              {errors.firstName && touched.firstName && (
                <Text style={styles.errors}>{errors.firstName}</Text>
              )}

              <CustomInput
                placeholder="Last Name"
                keyboardType="default"
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
                errors={errors.lastName}
                touched={touched.lastName}
              />
              {/* If this field contains an error and it has been touched, then display the error message */}
              {errors.lastName && touched.lastName && (
                <Text style={styles.errors}>{errors.lastName}</Text>
              )}

              <CustomInput
                placeholder="Mobile Number"
                keyboardType="phone-pad"
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber.trim()}
                errors={errors.phoneNumber}
                touched={touched.phoneNumber}
              />
              {/* If this field contains an error and it has been touched, then display the error message */}
              {errors.phoneNumber && touched.phoneNumber && (
                <Text style={styles.errors}>{errors.phoneNumber}</Text>
              )}

              <CustomInput
                placeholder="Email"
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

              <TouchableOpacity onPress={toggleModal}>
                <CustomModal
                  toggleModal={toggleModal}
                  isModalVisible={isModalVisible}
                  selectedUserIdentity={selectedUserIdentity}
                  setSelectedUserIdentity={setSelectedUserIdentity}
                />
              </TouchableOpacity>

              <CustomInput
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={isPasswordHidden}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                errors={errors.password}
                touched={touched.password}
                isPasswordHidden={isPasswordHidden}
                setIsPasswordHidden={setIsPasswordHidden}
              />
              {/* If this field contains an error and it has been touched, then display the error message */}
              {errors.password && touched.password && (
                <Text style={styles.errors}>{errors.password}</Text>
              )}

              <CustomInput
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={isPasswordConfirmHidden}
                onChangeText={handleChange('passwordConfirmation')}
                onBlur={handleBlur('passwordConfirmation')}
                value={values.passwordConfirmation}
                errors={errors.passwordConfirmation}
                touched={touched.passwordConfirmation}
                isPasswordConfirmHidden={isPasswordConfirmHidden}
                setIsPasswordConfirmHidden={setIsPasswordConfirmHidden}
              />
              {/* If this field contains an error and it has been touched, then display the error message */}
              {errors.passwordConfirmation && touched.passwordConfirmation && (
                <Text style={styles.errors}>{errors.passwordConfirmation}</Text>
              )}

              <View style={{ marginVertical: SIZES.radius }}>
                <CustomButton
                  text="Sign Up"
                  disabled={loading}
                  onPress={handleSubmit}
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
      )}
    </Formik>
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

  errors: {
    marginBottom: SIZES.radius,
    color: COLORS.error,
    ...FONTS.h4,
  },
});

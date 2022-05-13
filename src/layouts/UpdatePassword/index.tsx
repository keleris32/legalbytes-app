import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { COLORS, SIZES, FONTS } from '../../constants';
import { Formik } from 'formik';
import { updatePasswordValidationSchema } from './validationSchema';
import { CustomButton, CustomInput } from '../../components';

const UpdatePassword = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);
  // const [isNewPasswordHidden, setIsNewPasswordHidden] = useState<boolean>(true);
  // const [isNewPasswordConfirmHidden, setIsNewPasswordConfirmHidden] =
  //   useState<boolean>(true);

  const submitForm = async (formData: any): Promise<void> => {
    try {
      setLoading(true);
      console.log(formData);
    } catch {
      console.log('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{
        currentPassword: '',
        newPassword: '',
        newPasswordConfirmation: '',
      }}
      validateOnMount={true}
      onSubmit={values => {
        submitForm(values);
      }}
      validationSchema={updatePasswordValidationSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
      }) => (
        <View>
          <View style={{ width: wp('80%') }}>
            <CustomInput
              keyboardType="default"
              placeholder="Current Password"
              secureTextEntry={isPasswordHidden}
              onChangeText={handleChange('currentPassword')}
              onBlur={handleBlur('currentPassword')}
              value={values.currentPassword.trim()}
              errors={errors.currentPassword}
              touched={touched.currentPassword}
              isPasswordHidden={isPasswordHidden}
              setIsPasswordHidden={setIsPasswordHidden}
            />
            {/* If this field contains an error and it has been touched, then display the error message */}
            {errors.currentPassword && touched.currentPassword && (
              <Text style={styles.errors}>{errors.currentPassword}</Text>
            )}

            <CustomInput
              keyboardType="default"
              placeholder="New Password"
              secureTextEntry={isPasswordHidden}
              onChangeText={handleChange('newPassword')}
              onBlur={handleBlur('newPassword')}
              value={values.newPassword.trim()}
              errors={errors.newPassword}
              touched={touched.newPassword}
              isPasswordHidden={isPasswordHidden}
              setIsPasswordHidden={setIsPasswordHidden}
            />
            {/* If this field contains an error and it has been touched, then display the error message */}
            {errors.newPassword && touched.newPassword && (
              <Text style={styles.errors}>{errors.newPassword}</Text>
            )}

            <CustomInput
              keyboardType="default"
              placeholder="New Password Confirmation"
              secureTextEntry={isPasswordHidden}
              onChangeText={handleChange('newPasswordConfirmation')}
              onBlur={handleBlur('newPasswordConfirmation')}
              value={values.newPasswordConfirmation.trim()}
              errors={errors.newPasswordConfirmation}
              touched={touched.newPasswordConfirmation}
              isPasswordHidden={isPasswordHidden}
              setIsPasswordHidden={setIsPasswordHidden}
            />
            {/* If this field contains an error and it has been touched, then display the error message */}
            {errors.newPasswordConfirmation &&
              touched.newPasswordConfirmation && (
                <Text style={styles.errors}>
                  {errors.newPasswordConfirmation}
                </Text>
              )}

            <View style={{ marginVertical: SIZES.radius }}>
              <CustomButton
                text="Update Password"
                disabled={loading}
                onPress={handleSubmit}
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default UpdatePassword;

const styles = StyleSheet.create({
  errors: {
    marginBottom: SIZES.radius,
    color: COLORS.error,
    ...FONTS.h4,
  },
});

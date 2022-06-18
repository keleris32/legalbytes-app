import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ToastManager, { Toast } from 'toastify-react-native';

import { COLORS, SIZES, FONTS } from '../../constants';
import { Formik } from 'formik';
import { updateUserInfoValidationSchema } from './validationSchema';
import { CustomButton, CustomInput, CustomModal } from '../../components';
import axiosInstance from '../../config/axiosInterceptor';
import { GlobalContext } from '../../context/provider';
import { ActionType } from '../../context/actionTypes/getUserActionType';

const UpdateUserInfo = () => {
  const { getUserState, getUserDispatch } = useContext(GlobalContext);

  const [loading, setLoading] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedUserIdentity, setSelectedUserIdentity] = useState<string>(
    getUserState?.data?.user_role,
  );

  const toggleModal = (): void => setIsModalVisible(!isModalVisible);

  const submitForm = async (formData: any): Promise<void> => {
    let userObj = {
      firstname: formData?.firstName,
      lastname: formData?.lastName,
      username: formData?.firstName,
      phone: formData?.phoneNumber,
      email: formData?.email,
      user_role: selectedUserIdentity,
    };

    try {
      setLoading(true);

      const response = await axiosInstance.put(
        `/auth/user/${getUserState?.data?.id}/update`,
        userObj,
      );

      getUserDispatch({
        type: ActionType.GET_USER,
        payload: response?.data?.data?.user,
      }),
        Alert.alert('Success', 'Your profile has been updated successfully!', [
          {
            text: 'OK',
            onPress: () => {},
          },
        ]);
    } catch (error) {
      Toast.error('An error occurred, please try agaun later!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: getUserState?.data?.firstname,
        lastName: getUserState?.data?.lastname,
        phoneNumber: getUserState?.data?.phone,
        email: getUserState?.data?.email,
        identity: '',
      }}
      validateOnMount={true}
      onSubmit={values => {
        submitForm(values);
      }}
      validationSchema={updateUserInfoValidationSchema}>
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
          <View>
            <ToastManager width={wp('80%')} positionValue={hp('0%')} />
            <View style={{ width: wp('80%') }}>
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

              <View style={{ marginVertical: SIZES.radius }}>
                <CustomButton
                  text="Update"
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

export default UpdateUserInfo;

const styles = StyleSheet.create({
  errors: {
    marginBottom: SIZES.radius,
    color: COLORS.error,
    ...FONTS.h4,
  },
});

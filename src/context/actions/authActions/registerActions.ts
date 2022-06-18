import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../../config/axiosInterceptor';
import { FormType } from '../../../screens/SignUp';
import { User } from '../../../types/user';
import { ActionType as AuthActionType } from '../../actionTypes/authActionType';
import { ActionType as RegisterActionType } from '../../actionTypes/authActionTypes/registerActionTypes';

export default ({
    firstName: firstname,
    lastName: lastname,
    phoneNumber: phone,
    email,
    identity: user_role,
    password,
    passwordConfirmation: password_confirmation,
  }: FormType) =>
  async (
    registerDispatch: (arg0: {
      type: RegisterActionType;
      payload?: string | User;
    }) => void,
    authDispatch: (arg0: { type: AuthActionType }) => void,
  ) => {
    registerDispatch({
      type: RegisterActionType.REGISTER_PENDING,
    });

    try {
      const response = await axiosInstance.post('/auth/register', {
        firstname,
        lastname,
        phone,
        email,
        user_role,
        password,
        password_confirmation,
      });

      // If the Login operation is successfully, store the user object in storage
      AsyncStorage.setItem('userData', JSON.stringify(response.data.data.user));

      AsyncStorage.setItem('token', response.data.data.token);

      registerDispatch({
        type: RegisterActionType.REGISTER_SUCCESS,
        payload: response.data.data.user,
      });

      authDispatch({
        type: AuthActionType.AUTHENTICATE,
      });
    } catch (error) {
      registerDispatch({
        type: RegisterActionType.REGISTER_FAIL,
        payload: 'Please check your internet connection and try again!',
      });
    }
  };

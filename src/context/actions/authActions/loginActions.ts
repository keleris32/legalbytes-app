import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../../config/axiosInterceptor';
import { User } from '../../../types/user';
import { ActionType as loginActionType } from '../../actionTypes/authActionTypes/loginActionTypes';
import { ActionType as authActionType } from '../../actionTypes/authActionType';

interface Props {
  email: string;
  password: string;
}

export default ({ email, password }: Props) =>
  async (
    loginDispatch: (arg0: {
      type: loginActionType;
      payload?: string | User;
    }) => void,
    authDispatch: (arg0: { type: authActionType }) => void,
  ) => {
    loginDispatch({
      type: loginActionType.LOGIN_PENDING,
    });

    try {
      const response = await axiosInstance.post('/auth/login', {
        email,
        password,
      });

      // If the Login operation is successfully, store the user object in storage
      AsyncStorage.setItem('userData', JSON.stringify(response.data.data.user));

      loginDispatch({
        type: loginActionType.LOGIN_SUCCESS,
        payload: response.data.data.user,
      });

      authDispatch({
        type: authActionType.AUTHENTICATE,
      });
    } catch (error) {
      loginDispatch({
        type: loginActionType.LOGIN_FAIL,
        payload: 'No user found with this credentials!',
      });
    }
  };

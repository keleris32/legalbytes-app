import * as yup from 'yup';

export const forgotPasswordValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid Email address')
    .trim()
    .required('This field is required'),
});

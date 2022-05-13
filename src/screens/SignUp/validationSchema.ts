import * as yup from 'yup';

export const signUpValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .matches(/^[A-Z-a-z ]*$/, 'Please enter a valid name')
    .required('This field is required'),
  lastName: yup
    .string()
    .trim()
    .matches(/^[A-Z-a-z ]*$/, 'Please enter a valid name')
    .required('This field is required'),
  phoneNumber: yup
    .string()
    .required('This field is required')
    .trim()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      //   /^[0-9]\d+$/,
      'Enter a valid phone number',
    ),
  email: yup
    .string()
    .email('Please enter a valid Email address')
    .trim()
    .required('This field is required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters long`)
    .required('This field is required'),
  passwordConfirmation: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters long`)
    .required('This field is required'),
});

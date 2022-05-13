import * as yup from 'yup';

export const updatePasswordValidationSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .trim()
    .min(8, ({ min }) => `Password must be at least ${min} characters long`)
    .required('Password is required'),
  newPassword: yup
    .string()
    .trim()
    .min(8, ({ min }) => `Password must be at least ${min} characters long`)
    .required('Password is required'),
  newPasswordConfirmation: yup
    .string()
    .trim()
    .min(8, ({ min }) => `Password must be at least ${min} characters long`)
    .required('Password is required'),
});

import { Dimensions } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  // Error
  error: 'rgba(246, 86, 93, 1)',
  error80: 'rgba(246, 86, 93, 0.8)',
  error60: 'rgba(246, 86, 93, 0.6)',
  error20: 'rgba(246, 86, 93, 0.2)',
  error08: 'rgba(246, 86, 93, 0.08)',

  // Primary
  primary: 'rgba(0, 39, 43, 1)',
  primary80: 'rgba(0, 39, 43, 0.8)',
  primary60: 'rgba(0, 39, 43, 0.6)',
  primary20: 'rgba(0, 39, 43, 0.2)',
  primary08: 'rgba(0, 39, 43, 0.08)',

  // Secondary
  secondary: 'rgba(254, 184, 1, 1)',
  secondary80: 'rgba(254, 184, 1, 0.8)',
  secondary60: 'rgba(254, 184, 1, 0.6)',
  secondary20: 'rgba(254, 184, 1, 0.2)',
  secondary08: 'rgba(254, 184, 1, 0.08)',

  // Success
  success: 'rgba(253, 212, 70, 1)',
  success80: 'rgba(253, 212, 70, 0.8)',
  success60: 'rgba(253, 212, 70, 0.6)',
  success20: 'rgba(253, 212, 70, 0.2)',
  success08: 'rgba(253, 212, 70, 0.08)',

  // Dark
  dark: 'rgba(13, 15, 35, 1)',
  dark80: 'rgba(13, 15, 35, 0.8)',
  dark60: 'rgba(13, 15, 35, 0.6)',
  dark20: 'rgba(13, 15, 35, 0.2)',
  dark08: 'rgba(13, 15, 35, 0.08)',

  // Grey
  grey: 'rgba(160, 161, 180, 1)',
  grey80: 'rgba(160, 161, 180, 0.8)',
  grey60: 'rgba(160, 161, 180, 0.6)',
  grey20: 'rgba(160, 161, 180, 0.2)',
  grey08: 'rgba(160, 161, 180, 0.08)',

  // Light Grey
  lightGrey: 'rgba(247, 247, 247, 1)',
  lightGrey80: 'rgba(247, 247, 247, 0.8)',
  lightGrey60: 'rgba(247, 247, 247, 0.6)',
  lightGrey20: 'rgba(247, 247, 247, 0.2)',
  lightGrey08: 'rgba(247, 247, 247, 0.08)',

  // Light
  light: 'rgba(255, 255, 255, 1)',
  light80: 'rgba(255, 255, 255, 0.8)',
  light60: 'rgba(255, 255, 255, 0.6)',
  light20: 'rgba(255, 255, 255, 0.2)',
  light08: 'rgba(255, 255, 255, 0.08)',

  // Input blue
  lightBlue: 'rgba(247, 248, 249, 1)',
};

export const SIZES = {
  // global sizes
  base: wp('2%'), // 8
  radius: wp('3.5%'), // 12
  font: wp('4%'), // 14
  padding: wp('6.5%'), // 24
  margin: wp('7.5%'),
  largeSize: wp('10%'),

  // font sizes
  largeTitle: wp('10%'), // 40
  h1: wp('7.5%'), // 30
  h2: wp('6%'), // 22
  h3: wp('4.5%'), // 16
  h4: wp('4%'), // 14
  h5: wp('3.5%'), // 12
  body1: wp('7.5%'), // 30
  body2: wp('6%'), // 22
  body3: wp('4.5%'), // 16
  body4: wp('4%'), // 14
  body5: wp('3.5%'), // 12

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: { fontFamily: 'Poppins-Black', fontSize: SIZES.largeTitle },
  h1: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h5, lineHeight: 22 },
  body1: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

// export const darkTheme = {
//   backgroundColor: COLORS.darkBackground,
// };

// export const lightTheme = {
//   backgroundColor: COLORS.white,
// };

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;

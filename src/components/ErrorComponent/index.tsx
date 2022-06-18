import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  //   heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { COLORS, FONTS } from '../../constants';
import CustomButton from '../CustomButton';

const ErrorPageComponent = ({ text, refreshComp }: any) => {
  const loading: boolean = false;
  return (
    <View style={styles.container}>
      <View>
        <Icons name="wifi-off" style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </View>
      <CustomButton text="Refresh" disabled={loading} onPress={refreshComp} />
    </View>
  );
};

export default ErrorPageComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: wp('10%'),
    backgroundColor: COLORS.lightBlue,
  },

  icon: {
    fontSize: wp('20%'),
    color: COLORS.secondary,
    marginVertical: wp('5%'),
    alignSelf: 'center',
  },

  text: {
    textAlign: 'center',
    ...FONTS.body4,
  },
});

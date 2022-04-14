import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import icons from '../../constants/icons';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={icons.legalBytes} style={styles.logo} />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00272B',
  },

  logo: {
    resizeMode: 'contain',
    width: wp('80%'),
    height: hp('25%'),
  },
});

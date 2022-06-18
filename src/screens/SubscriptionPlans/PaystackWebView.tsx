import React, { useRef } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { WebView } from 'react-native-webview';
import { COLORS, SIZES } from '../../constants';
import { ActionType } from '../../context/actionTypes/getSubActionType';
import { HomeStackNav } from '../../enums/homeStackNavigator';

export default function PaystackWebView({
  authorization_url,
  navigation,
  closePaystackWebview,
  getSubDispatch,
}: any) {
  const webviewRef = useRef(null);

  const onNavigationStateChange = (state: any) => {
    const { url } = state;

    if (url.includes('https://staging.legalbytes.africa')) {
      closePaystackWebview();

      Alert.alert('Success', 'Your order has been confirmed!', [
        {
          text: 'OK',
          onPress: () => {
            getSubDispatch({
              type: ActionType.GET_SUB,
              payload: true,
            });
          },
        },
      ]);
    }
  };

  const onError = () => {
    Alert.alert('Error', 'Something went wrong, please try again later.', [
      {
        text: 'Ok',
        onPress: () => {
          navigation.navigate(HomeStackNav.CASE);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <WebView
        onNavigationStateChange={e => onNavigationStateChange(e)}
        source={{ uri: authorization_url }}
        scalesPageToFit
        startInLoadingState
        onError={onError}
        style={styles.webview}
        ref={webviewRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: wp('100%'),
    height: hp('70%'),
    backgroundColor: COLORS.light,
    borderTopStartRadius: SIZES.largeTitle,
    borderTopEndRadius: SIZES.largeTitle,
  },

  webview: {
    width: wp('100%'),
    height: wp('100%'),
    flex: 1,
  },
});

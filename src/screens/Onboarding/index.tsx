import React from 'react';
import { View, Animated, StyleSheet, Text, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { CustomButton } from '../../components';
import { COLORS, SIZES, constants, FONTS, images } from '../../constants';
import Dots from './Dots';
import { AuthNavigatorList } from '../../types/authNavigator';
import { AuthNav } from '../../enums/authNavigator';

type Props = NativeStackScreenProps<AuthNavigatorList, AuthNav.ONBOARDING>;

const Onboarding = ({ navigation }: Props) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const navigateToLogin = (): void => navigation.replace(AuthNav.LOGIN);
  const disabled: boolean = false;

  function renderFooter() {
    return (
      <View style={styles.footerContainer}>
        <Dots scrollX={scrollX} />

        <View style={{ width: wp('80%') }}>
          <CustomButton
            onPress={navigateToLogin}
            disabled={disabled}
            text="Get Started"
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {
        // @ts-ignore

        <Animated.FlatList
          data={constants.walkthrough}
          keyExtractor={item => item.id}
          horizontal
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            },
          )}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.listContainer}>
                <View style={styles.listImageWrapper}>
                  {index === 0 && (
                    <Image source={images.dataImg} style={styles.img} />
                  )}
                  {index === 1 && (
                    <Image source={images.searchImg} style={styles.img} />
                  )}
                  {index === 2 && (
                    <Image source={images.analysisImg} style={styles.img} />
                  )}
                </View>
                <View style={styles.textWrapper}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subTitle}>{item.sub_title}</Text>
                </View>
              </View>
            );
          }}
        />
      }
      {renderFooter()}
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },

  listContainer: {
    width: SIZES.width,
    justifyContent: 'center',
  },

  listImageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    resizeMode: 'contain',
    width: wp('70%'),
    height: hp('50%'),
  },

  textWrapper: {
    height: hp('40%'),
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: SIZES.padding,
  },

  title: {
    ...FONTS.h1,
    color: COLORS.dark,
  },

  subTitle: {
    marginTop: SIZES.radius,
    textAlign: 'center',
    ...FONTS.body3,
    color: COLORS.grey,
  },

  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: hp('25%'),
    alignItems: 'center',
  },
});

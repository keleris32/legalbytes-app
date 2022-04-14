import React from 'react';
import { View, Animated, StyleSheet, Text, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { COLORS, SIZES, constants, FONTS, images } from '../../constants';

const Onboarding = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View style={styles.dotsContainer}>
        {constants.walkthrough.map((_item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.dark08, '#FEB801', COLORS.dark08],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: 10,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  function renderFooter() {
    return (
      <View style={styles.footerContainer}>
        <Dots />

        <View
          style={{
            height: 55,
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: '#00272B',
          }}>
          <Text style={{ color: '#fff', ...FONTS.h4 }}>Get Started</Text>
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
    height: SIZES.height * 0.35,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: SIZES.padding,
  },

  title: {
    ...FONTS.h1,
    color: '#000',
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
    height: SIZES.height * 0.2,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.height > 700 ? SIZES.padding : 20,
  },

  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //   dot: {
  //     borderRadius: 5,
  //     marginHorizontal: 6,
  //     width: 10,
  //     height: 10,
  //     backgroundColor: '#FEB801',
  //   },
});

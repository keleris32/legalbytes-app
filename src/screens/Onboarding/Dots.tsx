import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';

import { COLORS, SIZES, constants } from '../../constants';

interface Props {
  scrollX: Animated.Value;
}

const Dots = ({ scrollX }: Props) => {
  const dotPosition = Animated.divide(scrollX, SIZES.width);

  return (
    <View style={styles.container}>
      {constants.walkthrough.map((_item, index) => {
        const dotColor = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [COLORS.dark08, COLORS.secondary, COLORS.dark08],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={`dot-${index}`}
            style={[styles.dot, { backgroundColor: dotColor }]}
          />
        );
      })}
    </View>
  );
};
export default Dots;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.height > 700 ? SIZES.padding : 20,
  },

  dot: {
    borderRadius: 5,
    marginHorizontal: 6,
    width: 10,
    height: 10,
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS, FONTS, SIZES } from '../../constants';
import { MockDataType } from '../../data/mock';

const Card = (props: MockDataType) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: COLORS.dark, ...FONTS.h3 }}>{props.court}</Text>
      <View>
        <Text>Suit No: {props.suit_no}</Text>
        <View style={styles.wrapper}>
          <View style={{ flex: 0.5 }}>
            <View style={{ marginBottom: SIZES.base }}>
              <Text style={styles.label}>Petitioner</Text>
              <Text style={styles.value} numberOfLines={1}>
                {props.petitioner}
              </Text>
            </View>
            <View>
              <Text style={styles.label}>Respondent</Text>
              <Text style={styles.value} numberOfLines={1}>
                {props.respondent}
              </Text>
            </View>
          </View>
          <View style={{ flex: 0.5, paddingLeft: SIZES.base }}>
            <View style={{ marginBottom: SIZES.base }}>
              <Text style={styles.label}>Judge</Text>
              <Text style={styles.value}>{props.judge}</Text>
            </View>
            <View>
              <Text style={styles.label}>Case Date</Text>
              <Text style={styles.value}>{props.date_delivered}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.base,
    paddingVertical: SIZES.base,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
  },

  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SIZES.base,
  },

  label: {
    color: COLORS.dark,
    ...FONTS.h4,
  },

  value: {
    color: COLORS.dark,
    ...FONTS.body5,
  },
});

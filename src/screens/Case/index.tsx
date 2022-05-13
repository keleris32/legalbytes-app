import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useContext } from 'react';

import { COLORS, FONTS, SIZES } from '../../constants';
import { GlobalContext } from '../../context/provider';

const Case = () => {
  const {
    selectedCaseState: { data },
  } = useContext(GlobalContext);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={true}
      contentContainerStyle={{
        flexGrow: 1,
      }}>
      <View style={styles.container}>
        <Text style={{ color: COLORS.dark, ...FONTS.h3 }}>{data?.court}</Text>
        <Text>{data?.suit_no}</Text>

        <View style={styles.descriptionWrapper}>
          <View style={styles.textWrapper}>
            <Text style={{ color: COLORS.dark, ...FONTS.h4 }}>
              Petitioner:{' '}
            </Text>
            <Text style={{ color: COLORS.dark, ...FONTS.body4 }}>
              {data?.petitioner}
            </Text>
          </View>

          <View style={styles.textWrapper}>
            <Text style={{ color: COLORS.dark, ...FONTS.h4 }}>
              Respondent:{' '}
            </Text>
            <Text style={{ color: COLORS.dark, ...FONTS.body4 }}>
              {data?.respondent}
            </Text>
          </View>

          <View style={styles.textWrapper}>
            <Text style={{ color: COLORS.dark, ...FONTS.h4 }}>Judge: </Text>
            <Text style={{ color: COLORS.dark, ...FONTS.body4 }}>
              {data?.judge}
            </Text>
          </View>

          <View style={styles.textWrapper}>
            <Text style={{ color: COLORS.dark, ...FONTS.h4 }}>Case Date: </Text>
            <Text style={{ color: COLORS.dark, ...FONTS.body4 }}>
              {data?.date_delivered}
            </Text>
          </View>
        </View>

        <View style={{ marginVertical: SIZES.base }}>
          <Text style={{ color: COLORS.dark, ...FONTS.h3 }}>
            Judgement Delivered
          </Text>
          <View style={{ marginVertical: SIZES.radius }}>
            <Text style={{ ...FONTS.body4 }}>{data?.judgement_delivered}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Case;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.radius,
  },

  descriptionWrapper: {
    marginVertical: SIZES.base,
    paddingVertical: SIZES.base,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
  },

  textWrapper: {
    flexDirection: 'row',
    marginVertical: SIZES.base,
  },
});

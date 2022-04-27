import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  //   heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { COLORS, FONTS, SIZES } from '../../constants';

const Home = () => {
  const [activeTab, setActiveTab] = useState({
    statutes: true,
    cases: false,
  });

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setActiveTab({ statutes: true, cases: false })}>
          <View
            style={[
              activeTab.statutes === true ? styles.activeTab : styles.tab,
            ]}>
            <Text
              style={[
                activeTab.statutes === true
                  ? styles.activeTabText
                  : styles.tabText,
              ]}>
              Statutes
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setActiveTab({ statutes: false, cases: true })}>
          <View
            style={[activeTab.cases === true ? styles.activeTab : styles.tab]}>
            <Text
              style={[
                activeTab.cases === true
                  ? styles.activeTabText
                  : styles.tabText,
              ]}>
              Cases
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },

  tab: {
    width: wp('50%'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.font,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.grey,
  },

  activeTab: {
    width: wp('50%'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.font,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondary,
  },

  tabText: {
    color: COLORS.grey,
    ...FONTS.h4,
  },

  activeTabText: {
    color: COLORS.dark,
    ...FONTS.h4,
  },
});

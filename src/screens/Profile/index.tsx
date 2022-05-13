import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { COLORS, FONTS, SIZES } from '../../constants';
import { UpdateUserInfo, UpdatePassword } from '../../layouts';

const Profile = () => {
  const [activeTab, setActiveTab] = useState({
    basicInfo: true,
    security: false,
  });

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setActiveTab({ basicInfo: true, security: false })}>
          <View
            style={[
              activeTab.basicInfo === true ? styles.activeTab : styles.tab,
            ]}>
            <Text
              style={[
                activeTab.basicInfo === true
                  ? styles.activeTabText
                  : styles.tabText,
              ]}>
              Basic Information
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setActiveTab({ basicInfo: false, security: true })}>
          <View
            style={[
              activeTab.security === true ? styles.activeTab : styles.tab,
            ]}>
            <Text
              style={[
                activeTab.security === true
                  ? styles.activeTabText
                  : styles.tabText,
              ]}>
              Security
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center', paddingVertical: SIZES.radius }}>
        {activeTab.basicInfo ? <UpdateUserInfo /> : <UpdatePassword />}
      </View>
    </View>
  );
};

export default Profile;

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

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  // NativeModules,
} from 'react-native';
import React, { useContext } from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { COLORS, FONTS, SIZES } from '../../constants';
import { GlobalContext } from '../../context/provider';
import Iconicons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNav } from '../../enums/homeStackNavigator';

const Case = () => {
  const navigation = useNavigation();

  const { getSubState } = useContext(GlobalContext);

  const navigateToPlans = () => {
    // @ts-ignore
    navigation.navigate(HomeStackNav.PLANS);
  };

  const {
    selectedCaseState: { data },
  } = useContext(GlobalContext);

  // const { Lucene } = NativeModules;
  // const handlePress = () => {
  //   Lucene.sayHello('John Doe', (err: any, message: any) => {
  //     if (err) return console.log(err);
  //     console.log('message', message);
  //   });
  // };

  console.log(getSubState?.data);

  const test = data.judgement_delivered.slice(
    0,
    data.judgement_delivered.length * 0.05,
  );

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
            {getSubState.data ? (
              <Text style={{ ...FONTS.body4 }}>
                {data?.judgement_delivered}
              </Text>
            ) : (
              <>
                <Text style={{ ...FONTS.body4 }}>{test}</Text>
                <TouchableOpacity
                  activeOpacity={0.3}
                  style={{ marginTop: SIZES.radius }}
                  onPress={navigateToPlans}>
                  <Text
                    style={{
                      ...FONTS.h3,
                      color: COLORS.dark,
                      textAlign: 'center',
                    }}>
                    Show More
                  </Text>
                  <View>
                    <Iconicons
                      name="keyboard-arrow-down"
                      style={{ fontSize: wp('10%'), textAlign: 'center' }}
                      color={COLORS.primary}
                    />
                  </View>
                </TouchableOpacity>
              </>
            )}
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

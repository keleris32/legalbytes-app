import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';

import { COLORS, SIZES } from '../../constants';
import { historyMockData } from '../../data/mock';
import { Card } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../../context/provider';
import { ActionType } from '../../context/actionTypes/selectedCaseActionType';
import { HomeStackNav } from '../../enums/homeStackNavigator';

const History = () => {
  const navigation = useNavigation();

  const { selectedCaseDispatch } = useContext(GlobalContext);

  const selectedOption = (optionData: any) => {
    selectedCaseDispatch({
      type: ActionType.GET_SELECTED_CASE,
      payload: optionData,
    });

    // @ts-ignore
    navigation.navigate(HomeStackNav.CASE);
  };

  return (
    <View style={styles.container}>
      {historyMockData.map((data: any) => (
        <TouchableOpacity
          key={data.id}
          onPress={() => selectedOption(data)}
          activeOpacity={0.7}
          style={styles.wrapper}>
          <Card
            court={data?.court}
            suit_no={data?.suit_no}
            petitioner={data?.petitioner}
            respondent={data?.respondent}
            judge={data?.judge}
            date_delivered={data?.date_delivered}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.radius,
  },

  wrapper: {
    padding: SIZES.base,
    borderWidth: 1,
    borderColor: COLORS.grey,
  },
});

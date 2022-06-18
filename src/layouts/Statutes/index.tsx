import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import { Card } from '../../components';
import { ActionType } from '../../context/actionTypes/selectedCaseActionType';
import { GlobalContext } from '../../context/provider';
import { mockData } from '../../data/mock';
import { HomeStackNav } from '../../enums/homeStackNavigator';
// import { HomeNavProps } from '../../screens/Home';
// import { MockDataType } from '../../data/mock';

const Statutes = () => {
  const navigation = useNavigation();

  const { selectedCaseDispatch } = useContext(GlobalContext);

  const selectedOption = (optionData: any) => {
    selectedCaseDispatch({
      type: ActionType.GET_SELECTED_CASE,
      payload: optionData,
    });

    // @ts-ignore
    navigation.navigate(HomeStackNav.STATUE);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={true}
      contentContainerStyle={{
        flexGrow: 1,
      }}>
      {mockData.map((data: any) => (
        <TouchableOpacity
          key={data.id}
          onPress={() => selectedOption(data)}
          activeOpacity={0.7}>
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
    </ScrollView>
  );
};

export default Statutes;

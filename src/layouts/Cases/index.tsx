import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Card } from '../../components';
import { mockData } from '../../data/mock';

const Cases = () => {
  return (
    <View>
      {mockData.map((data: any) => (
        <TouchableOpacity key={data.id}>
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

export default Cases;

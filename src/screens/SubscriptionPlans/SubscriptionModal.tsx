import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../../constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const SubscriptionModal = ({
  isModalVisible,
  toggleModal,
  data,
  setSelectedPlan,
}: any) => {
  const selectedOption = (plan: any) => {
    setSelectedPlan(plan);

    toggleModal();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isModalVisible}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selectedOption(item)}>
                <View style={styles.optionContainer}>
                  <Text style={{ ...FONTS.h3, color: COLORS.dark }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.cancelContainer}>
            <Text style={{ color: COLORS.dark, ...FONTS.h3 }}>Cancel</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default SubscriptionModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp('5%'),
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  modalContainer: {
    width: wp('80%'),
    borderRadius: SIZES.base,
    backgroundColor: COLORS.light,
    overflow: 'scroll',
  },

  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: SIZES.padding,
    borderWidth: 1,
    borderColor: COLORS.grey,
  },

  cancelContainer: {
    position: 'absolute',
    bottom: hp('-35%'),
    right: wp('-40%'),
    height: wp('12.5%'),
    width: wp('80%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.base,
    backgroundColor: COLORS.light,
  },
});

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/FontAwesome';

import { SIZES, COLORS, FONTS } from '../../constants';

interface DataTypes {
  id: string;
  name: string;
  type: string;
}

const DATA: DataTypes[] = [
  { id: '1', name: 'Non-Student (Practioner)', type: 'practioner' },
  { id: '2', name: 'Student', type: 'student' },
];

interface Props {
  isModalVisible: boolean;
  toggleModal: () => void;
  selectedUserIdentity: string;
  setSelectedUserIdentity: any;
}

const CustomModal = ({
  isModalVisible,
  toggleModal,
  selectedUserIdentity,
  setSelectedUserIdentity,
}: Props) => {
  const selectIdentity = ({ type }: DataTypes) => {
    setSelectedUserIdentity(type);

    toggleModal();
  };

  return (
    <View>
      <View style={styles.externalBar}>
        <Text style={{ color: COLORS.dark, ...FONTS.h4 }}>
          {selectedUserIdentity}
        </Text>
        <Icons
          name="chevron-circle-down"
          style={{ color: COLORS.dark, fontSize: wp('5%') }}
        />
      </View>

      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={styles.container}>
          <View style={styles.modalContainer}>
            <FlatList
              data={DATA}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => selectIdentity(item)}>
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
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  externalBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: wp('7.5%'),
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: SIZES.base / 2,
    paddingHorizontal: SIZES.radius,
    paddingVertical: SIZES.radius,
    marginVertical: SIZES.radius,
    backgroundColor: COLORS.light,
  },

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

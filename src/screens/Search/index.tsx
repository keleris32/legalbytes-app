import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { COLORS, FONTS, SIZES } from '../../constants';
import { CustomButton } from '../../components';

const Search = () => {
  const loading = false;
  const handleSubmit = () => console.log('Search!!');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Search term..."
          placeholderTextColor={COLORS.grey}
          style={styles.input}
          // value={searchValue}
          // onChangeText={text => searchFilterFunction(text)}
        />
        <Icons name="search" style={styles.icon} />
      </View>

      <CustomButton text="Search" disabled={loading} onPress={handleSubmit} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBlue,
    paddingHorizontal: SIZES.radius,
    paddingVertical: SIZES.padding,
  },

  inputContainer: {
    height: wp('10%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.radius,
    marginBottom: wp('5%'),
    borderRadius: SIZES.base / 2,
    backgroundColor: COLORS.light,
    borderWidth: 1,
  },

  icon: {
    fontSize: wp('7.5%'),
    color: COLORS.secondary,
    marginRight: SIZES.base,
  },

  input: {
    flex: 1,
    height: wp('12.5%'),
    color: COLORS.dark,
    ...FONTS.h4,
  },
});

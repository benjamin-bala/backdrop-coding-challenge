import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme/colors';
import fonts from '../../utils/theme/fonts';

export default function TitleText({text}) {
  return (
    <View>
      <Text style={titleStyle.text}>{text}</Text>
    </View>
  );
}

const titleStyle = StyleSheet.create({
  text: {
    fontFamily: fonts.type.sfprobold,
    textTransform: 'capitalize',
    fontWeight: fonts.weight.semi,
    fontSize: fonts.size.font20,
    color: colors.textBlack,
  },
});

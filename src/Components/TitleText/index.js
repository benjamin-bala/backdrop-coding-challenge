import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TitleText({text}) {
  return (
    <View>
      <Text style={titleStyle.text}>{text}</Text>
    </View>
  );
}

const titleStyle = StyleSheet.create({
  text: {
    textTransform: 'capitalize',
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
  },
});

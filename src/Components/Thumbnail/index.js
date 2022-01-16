import React from 'react';
import {View, Text} from 'react-native';
import Heart from '../../assets/icons/heart';
import {thumbnailStyle} from './style';

export default function Thumbnail() {
  return (
    <View style={thumbnailStyle.thumbnailContainer}>
      <View style={thumbnailStyle.thumbnail}>
        <Text style={{color: 'red'}}>s</Text>
      </View>
      <View style={thumbnailStyle.textbox}>
        <Text style={thumbnailStyle.text}>Abytsssasas</Text>
        <Heart fill="#DE0202" outline="#DE0202" />
      </View>
    </View>
  );
}

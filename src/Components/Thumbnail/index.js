import React from 'react';
import {View, Text, Image} from 'react-native';
import Heart from '../../assets/icons/heart';
import {colors} from '../../utils/theme/colors';
import {thumbnailStyle} from './style';

export default function Thumbnail({item}) {
  return (
    <View style={thumbnailStyle.thumbnailContainer}>
      <View style={thumbnailStyle.thumbnail}>
        {item.image && (
          <Image
            style={thumbnailStyle.thumbnail}
            source={{
              uri: item.image.url,
            }}
            resizeMode={'cover'}
          />
        )}
      </View>
      <View style={thumbnailStyle.textbox}>
        <Text style={thumbnailStyle.text}>{item.name}</Text>
        <Heart fill={colors.backgroundRed} outline={colors.backgroundRed} />
      </View>
    </View>
  );
}

import React from 'react';
import {View, Text, Image} from 'react-native';
import Heart from '../../assets/icons/heart';
import {listStyle} from './style';

export default function ListCard({item}) {
  return (
    <View style={listStyle.card}>
      <View style={listStyle.thumbnailContainer}>
        <View style={listStyle.thumbnail}>
          {item.image && (
            <Image
              source={{
                uri: item.image.url,
              }}
            />
          )}
        </View>
        <View>
          <Text style={listStyle.text}>{item.name}</Text>
        </View>
      </View>
      <View style={listStyle.like}>
        <Heart fill="none" stroke="#E5E5E5" />
      </View>
    </View>
  );
}

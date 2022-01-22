import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import Heart from '../../assets/icons/heart';
import {listStyle} from './style';

export default function ListCard({item, dispatch, state}) {
  let liked = false;

  state.likeId.filter(catitem => {
    if (item.id === catitem) {
      liked = true;
    }
  });

  return (
    <TouchableHighlight
      onPress={() => dispatch({type: 'FAVOURITE', payload: item})}>
      <View style={listStyle.card}>
        <View style={listStyle.thumbnailContainer}>
          <View style={listStyle.thumbnail}>
            {item.image && (
              <Image
                style={listStyle.thumbnail}
                source={{
                  uri: item.image.url,
                }}
                resizeMode={'cover'}
              />
            )}
          </View>
          <View>
            <Text style={listStyle.text}>{item.name}</Text>
          </View>
        </View>

        <View style={listStyle.like}>
          <Heart
            fill={liked ? 'red' : 'none'}
            stroke={liked ? 'red' : '#E5E5E5'}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
}

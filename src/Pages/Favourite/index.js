import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Thumbnail from '../../Components/Thumbnail';
import TitleText from '../../Components/TitleText';
import {favouriteStyle} from './style';

export default function Favourite(props) {
  return (
    <View style={favouriteStyle.favouriteContainer}>
      <TitleText text="Cats i like" />
      {props.state.favourite.length > 0 ? (
        <FlatList
          data={props.state.favourite}
          numColumns={2}
          keyExtractor={(item, index) => item.id}
          renderItem={Thumbnail}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: 'space-between',
          }}
        />
      ) : (
        <Text>You don't have a favourite cat</Text>
      )}
    </View>
  );
}

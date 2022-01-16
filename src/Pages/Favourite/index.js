import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Thumbnail from '../../Components/Thumbnail';
import TitleText from '../../Components/TitleText';
import {favouriteStyle} from './style';

export default function Favourite() {
  const mydata = [
    {
      id: 0,
      name: 'Abyyyss',
    },
    {
      id: 2,
      name: 'Abyyyss',
    },
    {
      id: 7,
      name: 'Abyyyss',
    },
  ];
  return (
    <View style={favouriteStyle.favouriteContainer}>
      <TitleText text="Cats i like" />
      <FlatList
        data={mydata}
        numColumns={2}
        keyExtractor={(item, index) => item.id}
        renderItem={Thumbnail}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-between',
        }}
      />
    </View>
  );
}

import React from 'react';
import {View, FlatList} from 'react-native';
import ListCard from '../../Components/ListCard';
import TitleText from '../../Components/TitleText';
import {homeStyle} from './style';

export default function Home({data, status}) {
  return (
    <View style={homeStyle.homeContainer}>
      <TitleText text="All cats" />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={ListCard}
        maxToRenderPerBatch={10}
      />
    </View>
  );
}

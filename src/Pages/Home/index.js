import React from 'react';
import {View, FlatList, Text} from 'react-native';
import ListCard from '../../Components/ListCard';
import TitleText from '../../Components/TitleText';
import {homeStyle} from './style';

export default function Home(props) {
  return (
    <View style={homeStyle.homeContainer}>
      <TitleText text="All cats" />
      {props.state.status !== 'fetched' ? (
        <Text>Fetching items</Text>
      ) : (
        <FlatList
          data={props.state.data}
          keyExtractor={item => item.id}
          renderItem={item => ListCard(item, props.dispatch, props.state)}
          maxToRenderPerBatch={10}
        />
      )}
    </View>
  );
}

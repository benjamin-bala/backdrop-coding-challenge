import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
import Thumbnail from '../../Components/Thumbnail';
import TitleText from '../../Components/TitleText';
import {favouriteStyle} from './style';
import {retriveData} from '../../utils/cache';

export default function Favourite(props) {
  const [refreshing, setRefreshing] = useState(false);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    retriveData(props.dispatch);
    wait(300).then(() => setRefreshing(false));
  }, []);

  function emptyComponent() {
    return (
      <View style={favouriteStyle.emptyComponent}>
        <Text>You don't have a favourite cat</Text>
      </View>
    );
  }

  return (
    <View style={favouriteStyle.favouriteContainer}>
      <TitleText text="Cats i like" />
      <FlatList
        data={props.state.favourite}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={Thumbnail}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-between',
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={emptyComponent}
      />
    </View>
  );
}

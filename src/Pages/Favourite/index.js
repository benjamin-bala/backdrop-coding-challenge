import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
import Thumbnail from '../../Components/Thumbnail';
import TitleText from '../../Components/TitleText';
import {favouriteStyle} from './style';
import {retriveData} from '../../utils/cache';

export default function Favourite(props) {
  const nullvalue = 0;
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const getData = () => {
    let data = retriveData();
    data.then(item => {
      props.dispatch({type: 'GET_FAVOURITE', payload: JSON.parse(item)});
    });
  };

  useEffect(() => {
    getData();
  }, [nullvalue]);

  return (
    <View style={favouriteStyle.favouriteContainer}>
      <TitleText text="Cats i like" />
      {props.state.favourite.length > 0 ? (
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
        />
      ) : (
        <Text>You don't have a favourite cat</Text>
      )}
    </View>
  );
}

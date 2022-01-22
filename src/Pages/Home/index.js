import React from 'react';
import {View, FlatList, Text} from 'react-native';
import ListCard from '../../Components/ListCard';
import TitleText from '../../Components/TitleText';
import {homeStyle} from './style';
import Queries from '../../utils/queries';

import {LoadingIndicator} from '../../Components/LoadingIndicator';
import SkeletonLoader from '../../Components/SkeletonLoader';

export default function Home(props) {
  let {data, isLoading, isError, isFetchingNextPage, handleLoad} = Queries();

  console.log('datta', data);

  if (isLoading) {
    return <SkeletonLoader />;
  }
  if (isError) {
    return (
      <View>
        <Text>An error Occured Try Again</Text>
      </View>
    );
  }
  function footerComponent() {
    if (isFetchingNextPage) {
      return <LoadingIndicator />;
    }
    return null;
  }

  return (
    <View style={homeStyle.homeContainer}>
      {data.pages && (
        <FlatList
          data={data.pages.flat()}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <ListCard
                item={item}
                dispatch={props.dispatch}
                state={props.state}
              />
            );
          }}
          initialNumToRender={9}
          onEndReached={handleLoad}
          onEndReachedThreshold={0.5}
          ListHeaderComponent={() => <TitleText text="All cats" />}
          ListFooterComponent={footerComponent}
        />
      )}
    </View>
  );
}

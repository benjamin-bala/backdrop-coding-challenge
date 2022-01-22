import * as React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

export function LoadingIndicator() {
  return (
    <View>
      <ActivityIndicator size="large" color={'black'} />
    </View>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

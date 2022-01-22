import React from 'react';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';
import {View} from 'react-native';

export default function SkeletonLoader() {
  return (
    <View style={{padding: 10}}>
      <ContentLoader
        speed={2}
        width={500}
        height={150}
        viewBox="0 0 500 150"
        backgroundColor="#bfbfbf"
        foregroundColor="#d1d1d1">
        <Circle cx="10" cy="20" r="8" />
        <Rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
        <Circle cx="10" cy="50" r="8" />
        <Rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
        <Circle cx="10" cy="80" r="8" />
        <Rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
        <Circle cx="10" cy="110" r="8" />
        <Rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
        <Circle cx="10" cy="110" r="8" />
        <Rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
        <Circle cx="10" cy="110" r="8" />
        <Rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
      </ContentLoader>
    </View>
  );
}

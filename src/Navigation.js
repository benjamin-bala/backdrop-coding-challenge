import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Pages/Home';
import Favourite from './Pages/Favourite';
import Cat from './assets/icons/cat';
import Heart from './assets/icons/heart';
import fetcher from './utils/fetcher';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const {data, status} = fetcher('https://api.thecatapi.com/v1/breeds');

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="All cats"
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            if (route.name === 'All cats') {
              return <Cat fill={color} outline={color} />;
            } else if (route.name === 'Cats i like') {
              return <Heart fill={color} outline={color} />;
            }
          },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: 'white',
            height: 100,
            borderTopColor: '#fafafa',
          },
          tabBarLabelStyle: {
            marginBottom: 23,
            fontSize: 16,
          },
        })}>
        <Tab.Screen
          options={{headerShown: false}}
          name="All cats"
          children={() => <Home data={data} status={status} />}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="Cats i like"
          component={Favourite}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

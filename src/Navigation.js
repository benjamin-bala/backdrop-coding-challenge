import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Favourite from './Screens/Favourite';
import Cat from './assets/icons/cat';
import Heart from './assets/icons/heart';
import {colors} from './utils/theme/colors';
import fonts from './utils/theme/fonts';
import {Dimensions} from 'react-native';

const Tab = createBottomTabNavigator();
const {width} = Dimensions.get('window');
export default function Navigation(props) {
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
            backgroundColor: colors.backgroundWhite,
            height: 100,
            borderTopColor: '#fafafa',
            alignItems: 'center',
            flexDirection: 'column',
          },
          tabBarLabelStyle: {
            marginBottom: width < 450 ? 23 : 10,
            fontSize: fonts.size.font16,
            fontFamily: fonts.type.sfproregular,
          },
        })}>
        <Tab.Screen
          options={{headerShown: false}}
          name="All cats"
          children={() => (
            <Home state={props.state} dispatch={props.dispatch} />
          )}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="Cats i like"
          children={() => (
            <Favourite state={props.state} dispatch={props.dispatch} />
          )}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

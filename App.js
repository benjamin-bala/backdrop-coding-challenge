import React, {useReducer} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Navigation from './src/Navigation';

const initialState = {
  status: 'idle',
  error: null,
  data: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCHING':
      return {...initialState, status: 'fetching'};
    case 'FETCHED':
      return {...initialState, status: 'fetched', data: action.payload};
    case 'FETCH_ERROR':
      return {...initialState, status: 'error', error: action.payload};
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar />
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default App;

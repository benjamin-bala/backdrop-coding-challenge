import React, {useEffect, useReducer} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Navigation from './src/Navigation';
import axios from 'axios';
import {storeData} from './src/utils/cache';

const initialState = {
  status: 'idle',
  error: null,
  data: [],
  favourite: [],
};

export const ACTIONS = {
  fetch: 'FETCHING',
  fetched: 'FETCHED',
  fetch_error: 'FETCH_ERROR',
  like: 'FAVOURITE',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.fetch:
      return {...initialState, status: 'fetching'};
    case ACTIONS.fetched:
      return {...initialState, status: 'fetched', data: action.payload};
    case ACTIONS.fetch_error:
      return {...initialState, status: 'error', error: action.payload};
    case ACTIONS.like:
      let newData = action.payload;
      storeData(newData);
      return state;

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = 'https://api.thecatapi.com/v1/breeds';

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      dispatch({type: ACTIONS.fetch});
      await axios
        .get(url, {
          headers: {
            'x-api-key': 'ccdd2de4-04ef-41e0-8b8d-21cd814a2808',
          },
        })
        .then(result => {
          dispatch({type: ACTIONS.fetched, payload: result.data});
        })
        .catch(error => {
          dispatch({type: ACTIONS.fetch_error, payload: error.message});
        });
    };

    fetchData();
  }, [url]);

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar />
      <Navigation state={state} dispatch={dispatch} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default App;

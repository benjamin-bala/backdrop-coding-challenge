import React, {useEffect, useReducer} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Navigation from './src/Navigation';
import {retriveData, storeData} from './src/utils/cache';
import {getId} from './src/utils/getId';
import {QueryClientProvider, QueryClient} from 'react-query';
import filterArray from './src/utils/filterArray';

const queryClient = new QueryClient();

const initialState = {
  favourite: [],
  likeId: [],
};

export const ACTIONS = {
  like: 'FAVOURITE',
  retrive_favourite: 'GET_FAVOURITE',
  add_id: 'GET_LIKE_ID',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.like:
      let newData = action.payload;
      storeData(newData);
      return {
        ...state,
        favourite: filterArray(state.favourite, newData),
        likeId: filterArray(state.likeId, newData.id),
      };
    case ACTIONS.retrive_favourite:
      let favouriteData = action.payload;
      return {
        ...state,
        favourite: favouriteData,
      };
    case ACTIONS.add_id:
      return {
        ...state,
        likeId: [...state.likeId, action.payload],
      };
    default:
      return state;
  }
}

function App() {
  const [_initialState, dispatch] = useReducer(reducer, initialState);

  async function getAllData() {
    await retriveData().then(newData => {
      dispatch({type: ACTIONS.retrive_favourite, payload: newData});
      if (newData.length > 0) {
        getId(newData, dispatch);
      }
    });
  }

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.Container}>
        <StatusBar />
        <Navigation state={_initialState} dispatch={dispatch} />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default App;

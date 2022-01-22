import React, {useEffect, useReducer} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Navigation from './src/Navigation';
import {retriveData, storeData} from './src/utils/cache';
import {getId} from './src/utils/getId';
import {QueryClientProvider, QueryClient} from 'react-query';

const queryClient = new QueryClient();

const initialState = {
  data: [],
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
        favourite: {
          newData,
          ...favourite,
        },
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
  const [stale, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    retriveData(dispatch);
    getId(stale, dispatch);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.Container}>
        <StatusBar />
        <Navigation state={stale} dispatch={dispatch} />
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

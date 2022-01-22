import {storeData, retriveData} from '../src/utils/cache';
import AsyncStorage from '@react-native-async-storage/async-storage';

beforeEach(async () => {
  await AsyncStorage.clear();
});

describe('Get cache data', () => {
  test('If No result exists at key, return an empty array', async () => {
    const result = await retriveData();
    expect(result).toEqual({});
  });
  test('Returns an array of saved items', async () => {
    await AsyncStorage.setItem(
      'favourite',
      JSON.stringify({id: 1, name: 'test cat'}),
    );
    const result = await retriveData();
    expect(result).toEqual({id: 1, name: 'test cat'});
  });
});

describe('Set cache data', () => {
  test('If item is set', async () => {
    await storeData({id: 1, name: 'test cat'});
    const result = await retriveData();
    expect(result.data).toEqual({id: 1, name: 'test cat'});
  });
});

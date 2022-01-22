import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async data => {
  // AsyncStorage.clear();
  try {
    // let alreadyInFavourite = false;
    let cache = retriveData();
    let _store = {data, ...cache};
    return AsyncStorage.setItem('favourite', JSON.stringify(_store));

    // if (cache) {
    // let likedCat = null ? [] : JSON.parse(cache);

    // likedCat.forEach(item => {
    //   if (item.id === data.id) alreadyInFavourite = true;
    // });

    // if (!alreadyInFavourite) {
    //   _store.push(data);
    // } else {
    //   let filtered_cache = _store.filter(_likecat => _likecat.id !== data.id);
    //   _store = filtered_cache;
    // }

    // if (_store.length > 0) {
    //   AsyncStorage.setItem('favourite', JSON.stringify(_store));
    //   return true;
    // }
    //   return false;
    // }
    // return false;
  } catch (error) {
    return false;
  }
};

export const retriveData = async () => {
  try {
    let result = await AsyncStorage.getItem('favourite');

    if (result) {
      return JSON.parse(result);
    }
    return {};
  } catch (e) {
    return {};
  }
};

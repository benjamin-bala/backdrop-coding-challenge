import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async data => {
  let alreadyInFavourite = false;
  AsyncStorage.getItem('favourite').then(likedCat => {
    likedCat = likedCat == null ? [] : JSON.parse(likedCat);

    likedCat.forEach(cat => {
      if (cat.id === data.id) alreadyInFavourite = true;
    });

    if (!alreadyInFavourite) {
      likedCat.push(data);
    } else {
      likeCat = likedCat.filter(_likecat => _likecat.id !== data.id);
    }

    return AsyncStorage.setItem('favourite', JSON.stringify(likedCat));
  });
};

export const retriveData = async () => {
  try {
    return await AsyncStorage.getItem('favourite');
  } catch (e) {
    console.log('error');
  }
};

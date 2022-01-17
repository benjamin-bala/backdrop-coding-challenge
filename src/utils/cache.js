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

    console.log('liked cat', likedCat);

    return AsyncStorage.setItem('favourite', JSON.stringify(likedCat));
  });
  console.log('Item added');
};

export const retriveData = async () => {
  try {
    return await AsyncStorage.getItem('favourite');
  } catch (e) {
    console.log('error');
  }
};

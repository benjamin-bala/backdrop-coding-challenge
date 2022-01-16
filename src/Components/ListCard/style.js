import {StyleSheet} from 'react-native';

export const listStyle = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  thumbnailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#777',
    marginRight: 10,
  },
});

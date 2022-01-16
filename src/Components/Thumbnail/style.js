import {StyleSheet} from 'react-native';

export const thumbnailStyle = StyleSheet.create({
  thumbnailContainer: {
    marginVertical: 15,
    width: '45%',
  },
  thumbnail: {
    backgroundColor: '#333',
    // width: 150,
    height: 150,
    borderRadius: 15,
  },
  textbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
  },
  text: {
    fontSize: 16,
    color: '#212227',
  },
});

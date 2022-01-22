import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme/colors';
import fonts from '../../utils/theme/fonts';

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
    fontFamily: fonts.type.sfproregular,
    fontSize: fonts.size.font16,
    color: colors.textBlack,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#eaeaea',
    marginRight: 10,
  },
});

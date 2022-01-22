import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme/colors';
import fonts from '../../utils/theme/fonts';

export const thumbnailStyle = StyleSheet.create({
  thumbnailContainer: {
    marginVertical: 15,
    width: '45%',
  },
  thumbnail: {
    backgroundColor: colors.backgroundBlack,
    // width: 150,
    height: 200,
    borderRadius: 15,
  },
  textbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
  },
  text: {
    fontSize: fonts.size.font16,
    fontFamily: fonts.type.sfproregular,
    color: colors.textBlack,
    textTransform: 'capitalize',
  },
});

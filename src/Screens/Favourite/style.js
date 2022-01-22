import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme/colors';

export const favouriteStyle = StyleSheet.create({
  favouriteContainer: {
    backgroundColor: colors.backgroundWhite,
    flex: 1,
    padding: 25,
  },
  emptyComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

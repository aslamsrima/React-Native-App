import { StyleSheet } from 'react-native';

import { Margin, Padding, Sizes } from '../../theme/index';

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: Margin.default,
    marginVertical: Margin.smallPlus,
    paddingVertical: Padding.defaultSmallPlus,
    borderRadius: Sizes.cornerRadius.default,
  },
  buttonIcon: {
    marginRight: Padding.small,
  },
});

export default styles;

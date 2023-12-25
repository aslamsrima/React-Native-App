import { StyleSheet } from 'react-native';

import { Icon, Margin, Padding, Sizes } from '../../theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: Sizes.cornerRadius.small,
    marginHorizontal: Margin.default,
  },
  iconContainer: {
    marginTop: Margin.defaultSmallPlus,
    marginBottom: Margin.smallPlusExtra,
  },
  leftIconContainerSpace: {
    marginStart: Margin.smallPlus + Margin.extraTiny,
    marginBottom: Margin.defaultSmallPlus,
  },
  iconStyle: {
    height: Icon.smallHeight,
    width: Icon.smallWidth,
  },
  homeMenuBar: {
    paddingTop: Padding.small,
  },
  menuBar: {
    paddingTop: Padding.extraSmall - Padding.extraTiny,
  },
  title:{
    marginTop: Margin.small,
  }
});

export default styles;

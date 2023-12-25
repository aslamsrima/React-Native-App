import { StyleSheet } from 'react-native';

import { BorderWidth, Icon, Margin, Padding, Sizes } from '../../theme/index';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Margin.default,
    marginVertical: Margin.default - Margin.extraTiny,
  },
  labelText: {
    zIndex: 1,
    paddingHorizontal: Padding.small,
    top: -Margin.smallPlus,
    left: Margin.smallPlusExtra,
  },
  textInput: {
    paddingHorizontal: Padding.none,
    height: Icon.defaultExtraHeight,
  },
  icon: {
    height: Icon.heightPlus,
    width: Icon.widthPlus,
  },
  inputContainer: {
    borderRadius: Sizes.cornerRadius.default,
    paddingHorizontal: Padding.defaultIntermediate,
  },
  validationError: {
    marginTop: Margin.smallPlus,
  },
  countryCode: {
    marginRight: Margin.extraSmall,
  },
  textInputBorder: {
    borderWidth: BorderWidth.extraSmall,
    borderRadius: Sizes.cornerRadius.default,
  },
  borderContainer: {
    height: Icon.defaultExtraHeight,
  },
  labelLeftMargin: {
    width: Icon.tinyIntermediateHeight,
  },
});

export default styles;

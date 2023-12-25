import { StyleSheet } from 'react-native';

import {  Margin } from '../../../theme/index';

const styles = StyleSheet.create({
  container: {
    marginTop: Margin.defaultLarge + Margin.smallPlus,
  },
  textInputContainer: {
    marginVertical: Margin.defaultSmall,
  },
  signUpButton: {
    marginVertical: Margin.none,
    marginTop: Margin.extraSmallPlus,
    marginBottom: Margin.smallPlus,
  },
});

export default styles;

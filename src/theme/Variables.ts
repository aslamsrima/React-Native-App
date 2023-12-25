import Colors from './Colors';
import StyleConfig from './StyleConfig';
import { ThemeNavigationColors } from '../../@types/theme';

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.commonThemeColor.secondary,
  background: '#EFEFEF',
  card: '#EFEFEF',
};

export const FontSize = {
  tiny: StyleConfig.countPixelRatio(6),
  small: StyleConfig.countPixelRatio(12),
  smallPlus: StyleConfig.countPixelRatio(16),
  medium: StyleConfig.countPixelRatio(18),
  mediumPlus: StyleConfig.countPixelRatio(22),
  regular: StyleConfig.countPixelRatio(24),
  regularPlus: StyleConfig.countPixelRatio(26),
  large: StyleConfig.countPixelRatio(28),
  largePlus: StyleConfig.countPixelRatio(30),
};

const tiny = 10;
const small = tiny * 2; // 20
const regular = tiny * 3; // 30
const large = regular * 2; // 60
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
};

import StyleConfig from './StyleConfig';

export const Margin = {
  extraPlusHuge: StyleConfig.smartScale(360),
  huge: StyleConfig.smartScale(128),
  hugeIntermediate: StyleConfig.smartScale(112),
  smallPlusHuge: StyleConfig.smartScale(95),
  smallHuge: StyleConfig.smartScale(85),
  defaultHuge: StyleConfig.smartScale(75),
  defaultSemiHuge: StyleConfig.smartScale(70),
  extralarge: StyleConfig.smartScale(64),
  largePlus: StyleConfig.smartScale(48),
  largeExtra: StyleConfig.smartScale(40),
  large: StyleConfig.smartScale(32),
  defaultLargePlus: StyleConfig.smartScale(30),
  defaultLargeSemiPlus: StyleConfig.smartScale(29),
  defaultLarge: StyleConfig.smartScale(25),
  defaultPlus: StyleConfig.smartScale(24),
  default: StyleConfig.smartScale(20),
  defaultSmallPlus: StyleConfig.smartScale(17),
  defaultTinyPlus: StyleConfig.smartScale(16),
  defaultSmall: StyleConfig.smartScale(14),
  smallIntermediate: StyleConfig.smartScale(13),
  smallPlusExtra: StyleConfig.smartScale(12),
  smallPlus: StyleConfig.smartScale(10),
  small: StyleConfig.smartScale(8),
  extraSmallPlus: StyleConfig.smartScale(6),
  extraSmallTinyPlus: StyleConfig.smartScale(5),
  extraSmall: StyleConfig.smartScale(4),
  tiny: StyleConfig.smartScale(2),
  extraTiny: StyleConfig.smartScale(1),
  none: 0,
};

export const Padding = {
  huge: StyleConfig.smartScale(128),
  extralarge: StyleConfig.smartScale(64),
  large: StyleConfig.smartScale(32),
  defaultPlus: StyleConfig.smartScale(25),
  defaultIntermediate: StyleConfig.smartScale(20),
  default: StyleConfig.smartScale(16),
  defaultSmallPlus: StyleConfig.smartScale(15),
  defaultSmall: StyleConfig.smartScale(12),
  smallPlus: StyleConfig.smartScale(10),
  small: StyleConfig.smartScale(8),
  extraSmall: StyleConfig.smartScale(4),
  extraTiny: StyleConfig.smartScale(1),
  tiny: StyleConfig.smartScale(2),
  none: StyleConfig.smartScale(0),
};

export const Sizes = {
  text: {
    tiny: StyleConfig.countPixelRatio(6),
    small: StyleConfig.countPixelRatio(12),
    smallPlus: StyleConfig.countPixelRatio(16),
    medium: StyleConfig.countPixelRatio(18),
    mediumPlus: StyleConfig.countPixelRatio(22),
    regular: StyleConfig.countPixelRatio(24),
    regularPlus: StyleConfig.countPixelRatio(26),
    large: StyleConfig.countPixelRatio(28),
    largePlus: StyleConfig.countPixelRatio(30),
  },
  cornerRadius: {
    hugePlus: StyleConfig.smartScale(80),
    huge: StyleConfig.smartScale(60),
    tinyHugePlus: StyleConfig.smartScale(49),
    tinyHuge: StyleConfig.smartScale(42),
    extraLargePlus: StyleConfig.smartScale(40),
    extralarge: StyleConfig.smartScale(24),
    defaultSmall: StyleConfig.smartScale(12),
    large: StyleConfig.smartScale(16),
    default: StyleConfig.smartScale(8),
    smallPlusExtra: StyleConfig.smartScale(7),
    smallPlus: StyleConfig.smartScale(5),
    small: StyleConfig.smartScale(4),
    extraSmallPlus: StyleConfig.smartScale(3),
    extraSmall: StyleConfig.smartScale(2),
    none: 0,
  },
  elevation: {
    huge: 40,
    default: 9,
    small: 2,
  },
};

export const BorderWidth = {
  extralarge: StyleConfig.smartScale(5),
  large: StyleConfig.smartScale(4),
  default: StyleConfig.smartScale(3),
  small: StyleConfig.smartScale(2),
  extraSmall: StyleConfig.smartScale(1),
  none: StyleConfig.smartScale(0),
};

export const Icon = {
  extraHuge: StyleConfig.smartScale(703),
  intermediatePlusHuge: StyleConfig.smartScale(139),
  extraHugePlusHeight: StyleConfig.smartScale(304),
  extraHugeHeight: StyleConfig.smartScale(279),
  semiExtraHugeHeight: StyleConfig.smartScale(262),
  hugePlusWidth: StyleConfig.smartWidthScale(191),
  hugePlusHeight: StyleConfig.smartScale(102),
  intermediateHugePlusWidth: StyleConfig.smartScale(93),
  intermediateHuge: StyleConfig.smartScale(87),
  largePlus: StyleConfig.smartScale(83),
  hugeHeight: StyleConfig.smartScale(80),
  hugeWidth: StyleConfig.smartWidthScale(80),
  largeWidth: StyleConfig.smartScale(72),
  semiLargeWidth: StyleConfig.smartScale(70),
  defaultPlusExtraHeight: StyleConfig.smartScale(60),
  defaultPlusExtraWidth: StyleConfig.smartWidthScale(60),
  semiLargePlusHeight: StyleConfig.smartScale(58),
  semiLargeHeight: StyleConfig.smartScale(56),
  defaultPlusHeight: StyleConfig.smartScale(58),
  defaultExtraHeight: StyleConfig.smartScale(48),
  defaultExtraWidth: StyleConfig.smartWidthScale(48),
  defaultHeight: StyleConfig.smartScale(40),
  defaultWidth: StyleConfig.smartWidthScale(40),
  smallPlusHeight: StyleConfig.smartScale(35),
  smallPlusWidth: StyleConfig.smartWidthScale(35),
  smallSemiPlusExtraHeight: StyleConfig.smartScale(32),
  smallSemiPlusExtraWidth: StyleConfig.smartWidthScale(32),
  smallSemiPlusHeight: StyleConfig.smartScale(30),
  smallSemiPlusWidth: StyleConfig.smartWidthScale(30),
  smallIntermediateHeight: StyleConfig.smartScale(28),
  smallIntermediateWidth: StyleConfig.smartWidthScale(28),
  smallHeight: StyleConfig.smartScale(24),
  smallWidth: StyleConfig.smartWidthScale(24),
  heightPlusExtra: StyleConfig.smartScale(20),
  widthPlusExtra: StyleConfig.smartWidthScale(20),
  heightPlus: StyleConfig.smartScale(18),
  widthPlus: StyleConfig.smartWidthScale(18),
  extraHeight: StyleConfig.smartScale(16),
  extraWidth: StyleConfig.smartWidthScale(16),
  height: StyleConfig.smartScale(15),
  width: StyleConfig.smartWidthScale(15),
  tinyPlusExtraHeight: StyleConfig.smartScale(14),
  tinyPlusExtraWidth: StyleConfig.smartWidthScale(14),
  tinyIntermediateHeight: StyleConfig.smartWidthScale(12),
  tinyIntermediateWidth: StyleConfig.smartWidthScale(12),
  tinyPlusHeight: StyleConfig.smartWidthScale(8),
  tinyPlusWidth: StyleConfig.smartWidthScale(8),
  tinyHeight: StyleConfig.smartScale(1),
  tinyWidth: StyleConfig.smartWidthScale(1),
  none: 0,
};

export const MaxLength = {
  name: 45,
  phoneNumber: 15,
  password: 15,
  age: 3,
};
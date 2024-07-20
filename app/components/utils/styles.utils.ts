export enum WidthOption {
  full = 'full',
  fit = 'fit',
  half = 'half',
  third = 'third',
  twoThirds = 'twoThirds',
  quarter = 'quarter',
  threeQuarters = 'threeQuarters',
  default = 'default',
}

const widthMapping: Record<WidthOption, string> = {
  [WidthOption.full]: 'w-full',
  [WidthOption.fit]: 'w-fit',
  [WidthOption.half]: 'w-1/2',
  [WidthOption.third]: 'w-1/3',
  [WidthOption.twoThirds]: 'w-2/3',
  [WidthOption.quarter]: 'w-1/4',
  [WidthOption.threeQuarters]: 'w-3/4',
  [WidthOption.default]: '',
};

export const getWidthClass = (width: WidthOption): string =>
  widthMapping[width];

export enum HeightOption {
  full = 'full',
  fit = 'fit',
  screen = 'screen',
  default = 'default',
}

const heightMapping: Record<HeightOption, string> = {
  [HeightOption.full]: 'h-full',
  [HeightOption.fit]: 'h-fit',
  [HeightOption.screen]: 'h-screen',
  [HeightOption.default]: '',
};

export const getHeightClass = (height: HeightOption): string =>
  heightMapping[height];

export enum SpacingOption {
  none = 'none',
  small = 'small',
  medium = 'medium',
  large = 'large',
  maximum = 'maximum',
  default = 'default',
}

const paddingMapping: Record<SpacingOption, string> = {
  [SpacingOption.none]: 'p-0',
  [SpacingOption.small]: 'p-1 sm:p-2',
  [SpacingOption.medium]: 'p-2 sm:p-4',
  [SpacingOption.large]: 'p-4 sm:p-8',
  [SpacingOption.maximum]: 'p-8 sm:p-16',
  [SpacingOption.default]: '',
};

export const getPaddingClass = (padding: SpacingOption): string =>
  paddingMapping[padding];
export const getPaddingXClass = (padding: SpacingOption): string =>
  padding === SpacingOption.default
    ? ''
    : `px-${paddingMapping[padding].split('-')[1]}`;

export const getPaddingYClass = (padding: SpacingOption): string =>
  padding === SpacingOption.default
    ? ''
    : `py-${paddingMapping[padding].split('-')[1]}`;

const marginMapping: Record<SpacingOption, string> = {
  [SpacingOption.none]: 'm-0',
  [SpacingOption.small]: 'm-1 sm:m-2',
  [SpacingOption.medium]: 'm-2 sm:m-4',
  [SpacingOption.large]: 'm-4 sm:m-8',
  [SpacingOption.maximum]: 'm-8 sm:m-16',
  [SpacingOption.default]: '',
};

export const getMarginClass = (margin: SpacingOption): string =>
  marginMapping[margin];
export const getMarginXClass = (margin: SpacingOption): string =>
  margin === SpacingOption.default
    ? ''
    : `mx-${marginMapping[margin].split('-')[1]}`;

export const getMarginYClass = (margin: SpacingOption): string =>
  margin === SpacingOption.default
    ? ''
    : `my-${marginMapping[margin].split('-')[1]}`;

export const defaultIconSize = 'w-5 h-5';

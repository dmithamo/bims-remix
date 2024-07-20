import {
  getHeightClass,
  getPaddingXClass,
  getPaddingYClass,
  getWidthClass,
  HeightOption,
  SpacingOption,
  WidthOption,
} from '~/components/utils/styles.utils';
import { createElement, type ReactElement, type ReactNode } from 'react';
import { clsx } from 'clsx';

export enum JustifyOption {
  start = 'start',
  end = 'end',
  center = 'center',
  between = 'between',
  around = 'around',
}

const justifyMapping: Record<JustifyOption, string> = {
  [JustifyOption.start]: 'justify-start',
  [JustifyOption.end]: 'justify-end',
  [JustifyOption.center]: 'justify-center',
  [JustifyOption.between]: 'justify-between',
  [JustifyOption.around]: 'justify-around',
};

const getJustifyClass = (justify: JustifyOption): string =>
  justifyMapping[justify];

export enum AlignOption {
  start = 'start',
  end = 'end',
  center = 'center',
  baseline = 'baseline',
  stretch = 'stretch',
}

const alignMapping: Record<AlignOption, string> = {
  [AlignOption.start]: 'items-start',
  [AlignOption.end]: 'items-end',
  [AlignOption.center]: 'items-center',
  [AlignOption.baseline]: 'items-baseline',
  [AlignOption.stretch]: 'items-stretch',
};

const getAlignClass = (align: AlignOption): string => alignMapping[align];
export enum DirectionOption {
  row = 'row',
  column = 'column',
  rowReverse = 'row-reverse',
  columnReverse = 'column-reverse',
}

const directionMapping: Record<DirectionOption, string> = {
  [DirectionOption.row]: 'flex-row',
  [DirectionOption.column]: 'flex-col',
  [DirectionOption.rowReverse]: 'flex-row-reverse',
  [DirectionOption.columnReverse]: 'flex-col-reverse',
};

const getDirectionClass = (direction: DirectionOption): string =>
  directionMapping[direction];

export enum GapOption {
  none = 'none',
  minimum = 'minimum',
  medium = 'medium',
  large = 'large',
  maximum = 'maximum',
  default = 'default',
}

const gapMapping: Record<GapOption, string> = {
  [GapOption.none]: 'gap-0',
  [GapOption.minimum]: 'gap-1 sm:gap-2',
  [GapOption.medium]: 'gap-2 sm:gap-4',
  [GapOption.large]: 'gap-6 sm:gap-8',
  [GapOption.maximum]: 'gap-12 sm:gap-24',
  [GapOption.default]: '',
};

const getSpacingClass = (space: GapOption): string => gapMapping[space];

interface Props {
  children: ReactNode;
  width?: WidthOption;
  justify?: JustifyOption;
  align?: AlignOption;
  direction?: DirectionOption;
  gap?: GapOption;
  height?: HeightOption;
  tag?: keyof HTMLElementTagNameMap;
  paddingX?: SpacingOption;
  paddingY?: SpacingOption;
  marginX?: SpacingOption;
  marginY?: SpacingOption;
  className?: string;
}

export function FlexContainer(props: Props): ReactElement {
  const {
    children,
    width,
    height,
    justify,
    align,
    direction,
    gap,
    tag = 'div',
    paddingX,
    paddingY,
    marginX,
    marginY,
    className = '',
  } = props;

  const widthClass = getWidthClass(width ?? WidthOption.default);
  const heightClass = getHeightClass(height ?? HeightOption.default);
  const justifyClass = getJustifyClass(justify ?? JustifyOption.start);
  const alignClass = getAlignClass(align ?? AlignOption.start);
  const directionClass = getDirectionClass(direction ?? DirectionOption.row);
  const gapClass = getSpacingClass(gap ?? GapOption.default);
  const paddingXClass = getPaddingXClass(paddingX ?? SpacingOption.default);
  const paddingYClass = getPaddingYClass(paddingY ?? SpacingOption.default);
  const marginXClass = getPaddingXClass(marginX ?? SpacingOption.default);
  const marginYClass = getPaddingYClass(marginY ?? SpacingOption.default);

  return createElement(
    tag,
    {
      className: clsx(
        'flex',
        directionClass,
        widthClass,
        heightClass,
        justifyClass,
        alignClass,
        gapClass,
        paddingXClass,
        paddingYClass,
        marginXClass,
        marginYClass,
        className,
      ),
    },
    children,
  );
}

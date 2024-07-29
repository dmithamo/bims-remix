import {
  getPaddingClass,
  getWidthClass,
  SpacingOption,
  WidthOption,
} from '~/components/utils/styles.utils';
import { type ReactElement } from 'react';
import { elementRounding } from '~/utils/styling-constants';
import { clsx } from 'clsx';

interface Props {
  children: ReactElement | ReactElement[];
  width?: WidthOption;
  isRaised?: boolean;
  padding?: SpacingOption;
  className?: string;
}

export function CardContainer(props: Props): ReactElement {
  const { children, width, isRaised, padding, className = '' } = props;
  const widthClass = getWidthClass(width ?? WidthOption.full);
  const raisedClass = isRaised ? 'shadow' : '';
  const paddingClass = getPaddingClass(padding ?? SpacingOption.none);

  return (
    <div
      className={clsx(
        widthClass,
        raisedClass,
        paddingClass,
        elementRounding,
        'bg-white',
        className,
      )}>
      {children}
    </div>
  );
}

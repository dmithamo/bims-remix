import { type ReactElement } from 'react';
import { clsx } from 'clsx';
import { elementRounding } from '~/utils/styling-constants';

export enum ButtonStyle {
  primary = 'primary',
  secondary = 'secondary',
  ghost = 'ghost',
  danger = 'danger',
  link = 'link',
}

export enum ButtonType {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

const buttonStyleClasses = {
  [ButtonStyle.primary]: 'bg-primary/95 text-accent',
  [ButtonStyle.secondary]: 'bg-gray-500 hover:bg-gray-600 text-white',
  [ButtonStyle.ghost]: 'bg-transparent hover:bg-gray-100 text-gray-700',
  [ButtonStyle.danger]: 'bg-red-500 hover:bg-red-600 text-white',
  [ButtonStyle.link]: 'bg-transparent hover:bg-transparent text-blue-500',
};

interface Props {
  onClick?: () => void;
  children: ReactElement | ReactElement[];
  isDisabled?: boolean;
  style?: ButtonStyle;
  type?: ButtonType;
}

export const Button = (props: Props): ReactElement => {
  const {
    onClick,
    children,
    isDisabled,
    type = ButtonType.button,
    style = ButtonStyle.primary,
  } = props;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      type={type}
      className={clsx(
        buttonStyleClasses[style],
        'w-full',
        'p-2 sm:p-3',
        'uppercase',
        elementRounding,
        {
          'cursor-not-allowed': isDisabled,
          'opacity-50': isDisabled,
        },
      )}>
      {children}
    </button>
  );
};

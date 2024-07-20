import { type FC } from 'react';
import { clsx } from 'clsx';

interface Props {
  widthHeight?: string;
  onClick?: () => void;
  iconClasses?: string;
}

export const XIcon: FC<Props> = ({ widthHeight, iconClasses, onClick }) => (
  <svg
    onClick={onClick}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={clsx({
      'w-6 h-6': !widthHeight,
      'cursor-pointer': onClick,
      [widthHeight ?? '']: widthHeight,
      [iconClasses ?? '']: iconClasses,
    })}>
    <path
      fillRule="evenodd"
      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

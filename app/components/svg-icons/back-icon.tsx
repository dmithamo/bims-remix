import { type FC } from 'react';

interface Props {
  widthHeight?: string;
}

export const BackIcon: FC<Props> = ({ widthHeight }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={widthHeight ?? 'w-8 h-8'}>
    <path
      fill="currentColor"
      d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"></path>
  </svg>
);

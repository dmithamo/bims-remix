import { type FC } from 'react';

interface Props {
  widthHeight?: string;
}

export const TransactionsIcon: FC<Props> = ({ widthHeight }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={widthHeight ?? 'w-6 h-6'}>
    <path
      fill="currentColor"
      d="M10 4h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 4 6.229 4 10 4"></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m22 12.818l-.409-.409a2.25 2.25 0 0 0-3.182 0l-.801.801a2.251 2.251 0 0 0-4.358.79v1.764a2.25 2.25 0 0 0-1.341 3.827l.409.409H10c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12c0-.442 0-.858.002-1.25h19.996c.002.392.002.808.002 1.25zM6 15.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.5 13.25a.75.75 0 0 1 .75.75v4.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V14a.75.75 0 0 1 .75-.75m3.97.22a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06z"
      clipRule="evenodd"></path>
  </svg>
);

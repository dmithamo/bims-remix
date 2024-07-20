import React from 'react';
import { clsx } from 'clsx';
import {
  AlignOption,
  DirectionOption,
  FlexContainer,
  GapOption,
  JustifyOption,
} from '~/components/flex/flex-container';
import { Logo } from '~/components/logo';

export const AppFooter: React.FC = () => (
  <div
    className={clsx(
      'w-full',
      'p-12',
      'bg-background',
      'border-t border-t-background-dark',
    )}>
    <FlexContainer
      direction={DirectionOption.column}
      align={AlignOption.start}
      justify={JustifyOption.center}
      gap={GapOption.medium}>
      <Logo shouldClickToHome={false} />
      <p className={'opacity-50 text-sm'}>
        <a
          href="https://github.com/dmithamo"
          target="_blank"
          rel="noreferrer"
          className={'underline'}>
          &copy;2023 dmithamo | GitHub
        </a>
      </p>
    </FlexContainer>
  </div>
);

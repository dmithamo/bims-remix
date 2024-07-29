import { Outlet } from '@remix-run/react';
import { clsx } from 'clsx';
import {
  DirectionOption,
  FlexContainer,
} from '~/components/flex/flex-container';
import { AppFooter } from '~/components/app-nav/app-footer';

export default function AuthLayout() {
  return (
    <>
      <FlexContainer
        className={'bg-secondary h-screen'}
        direction={DirectionOption.column}>
        <div
          className={clsx(
            'w-full sm:w-[550px]',
            'px-6 py-2',
            'sm:mx-auto',
            'bg-background',
          )}>
          <Outlet />
        </div>
      </FlexContainer>
      <AppFooter />
    </>
  );
}

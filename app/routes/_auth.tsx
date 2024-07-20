import { Outlet } from '@remix-run/react';
import AppHeader from '~/components/app-nav/app-header';
import { headerNavHeight } from '~/utils/styling-constants';
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
        className={'bg-background h-screen'}
        direction={DirectionOption.column}>
        <div className={clsx('w-full', headerNavHeight)}>
          <AppHeader />
        </div>

        <div className={clsx('w-full sm:w-[550px]', 'p-6', 'sm:mx-auto')}>
          <Outlet />
        </div>
      </FlexContainer>
      <AppFooter />
    </>
  );
}

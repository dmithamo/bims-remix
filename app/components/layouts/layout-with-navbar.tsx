import type { FC, ReactElement } from 'react';
import AppNavBar from '~/components/app-nav/app-navbar';
import { Outlet } from '@remix-run/react';

interface Props {
  navLinks: Array<{
    to: string;
    label: string;
    icon: ReactElement;
  }>;
}
export const LayoutWithNavbar: FC<Props> = ({ navLinks }) => {
  return (
    <>
      <div className={'w-full p-3 mb-20'}>
        <Outlet />
      </div>
      <AppNavBar navItems={navLinks} />
    </>
  );
};

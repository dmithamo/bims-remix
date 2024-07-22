import type { FC, ReactElement } from 'react';
import AppNavBar from '~/components/app-nav/app-navbar';
import { Outlet } from '@remix-run/react';
import { clsx } from 'clsx';

interface Props {
  sidebarLinks: Array<{
    to: string;
    label: string;
    icon: ReactElement;
  }>;
}
export const LayoutWithSidebar: FC<Props> = ({ sidebarLinks }) => {
  return (
    <div className={clsx('w-full h-full')}>
      <AppNavBar navItems={sidebarLinks} />
      <div className={'flex-1 p-3 h-full mt-16 mb-16'}>
        <Outlet />
      </div>
    </div>
  );
};

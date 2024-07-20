import type { FC, ReactElement } from 'react';
import AppSidebar from '~/components/app-nav/app-sidebar';
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
    <div className={clsx('relative sm:flex', 'h-full')}>
      <AppSidebar navItems={sidebarLinks} />
      <div className={'flex-1 p-3 h-full'}>
        <Outlet />
      </div>
    </div>
  );
};

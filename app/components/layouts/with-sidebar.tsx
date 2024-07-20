import type { FC, ReactElement } from 'react';
import {
  DirectionOption,
  FlexContainer,
} from '~/components/flex/flex-container';
import { HeightOption } from '~/components/utils/styles.utils';
import AppSidebar from '~/components/app-nav/app-sidebar';
import { Outlet } from '@remix-run/react';
import { headerNavHeightValue } from '~/utils/styling-constants';
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
    <div className={clsx('relative sm:block', 'h-full')}>
      <FlexContainer direction={DirectionOption.row} height={HeightOption.full}>
        <div
          className={clsx(
            'w-fit h-full',
            `absolute top-${headerNavHeightValue}`,
            `sm:block sm:relative`,
          )}>
          <AppSidebar navItems={sidebarLinks} />
        </div>

        <div className={'flex-1 p-3 h-full'}>
          <Outlet />
        </div>
      </FlexContainer>
    </div>
  );
};

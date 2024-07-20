import { type ReactElement, useMemo } from 'react';
import { Outlet, useLoaderData } from '@remix-run/react';
import AppHeader from '~/components/app-nav/app-header';
import { headerNavHeight } from '~/utils/styling-constants';
import { json, LoaderFunctionArgs } from '@remix-run/server-runtime';
import {
  assetsRoute,
  financeRoute,
  timelinesRoute,
} from '~/utils/routes.utils';
import { WalletIcon } from '~/components/svg-icons/wallet-icon';
import { BriefcaseIcon } from '~/components/svg-icons/briefcase-icon';
import { CalendarIcon } from '~/components/svg-icons/calendar-icon';
import { clsx } from 'clsx';
import { getAllowedAppsFromSession } from '~/api/auth/permissions';
import { SessionUser } from '~/utils/types';

/*
 * Get session user from session cookie
 * Obtain allowed app list knowing session user
 * Return user, appVersion, allowedApps
 */
export const loader = async ({ request }: LoaderFunctionArgs) => {
  console.log({ request });
  const appVersion = '0.0.0';
  const user: SessionUser = {
    id: '9d2e758e-697a-4f3b-a137-fd77fed45e68',
    name: 'dmithamo',
    email: 'b@dmithamo.dev',
    account: {
      id: '9d2e758e-697a-4f3b-a137-fd77fed45e68',
      name: 'dmithamo',
    },
    role: {
      id: '9d2e758e-697a-4f3b-a137-fd77fed45e68',
      name: 'admin',
    },
  };

  const allowedApps = getAllowedAppsFromSession({
    sessionId: '9d2e758e-697a-4f3b-a137-fd77fed45e68',
    sessionUser: user,
  });

  return json({
    user,
    appVersion,
    allowedApps,
  });
};

export default function DashboardLayout() {
  const data = useLoaderData<typeof loader>();
  const appIcons = useMemo<Record<string, ReactElement>>(
    () => ({
      [financeRoute()]: <WalletIcon />,
      [assetsRoute()]: <BriefcaseIcon />,
      [timelinesRoute()]: <CalendarIcon />,
    }),
    [],
  );

  return (
    <div className={clsx('bg-background', 'w-full h-screen', 'flex flex-col')}>
      <div className={clsx('w-full', headerNavHeight)}>
        <AppHeader
          appList={data.allowedApps.map(({ href, ...rest }) => ({
            href,
            icon: appIcons[href],
            ...rest,
          }))}
          user={data.user}
          appVersion={data.appVersion}
        />
      </div>
      <div className={'w-full flex-1'}>
        <Outlet />
      </div>
    </div>
  );
}

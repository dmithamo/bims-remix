import { Outlet, useLoaderData } from '@remix-run/react';
import AppHeader from '~/components/app-nav/app-header';
import { headerNavHeight } from '~/utils/styling-constants';
import { clsx } from 'clsx';
import { LoaderFunction } from '@remix-run/node';
import { authenticator } from '~/services/auth/auth.server';
import { loginRoute } from '~/utils/routes.utils';

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: loginRoute(),
  });
};

export default function DashboardLayout() {
  const data = useLoaderData<typeof loader>();
  return (
    <div
      className={clsx(
        'bg-background',
        'w-full h-screen',
        'flex flex-col',
        'bg-background',
      )}>
      <div className={clsx('w-full', headerNavHeight)}>
        <AppHeader user={data.user} />
      </div>
      <div className={clsx('w-full flex-1 bg-secondary rounded-t-xl shadow')}>
        <Outlet />
      </div>
    </div>
  );
}

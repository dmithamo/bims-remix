import type { LoaderFunction } from '@remix-run/node';
import { authenticator } from '~/services/auth/auth.server';
import { homeRoute, loginRoute } from '~/utils/routes.utils';

export const loader: LoaderFunction = async ({ request }) => {
  const rLoader = await authenticator.authenticate('google', request, {
    successRedirect: homeRoute(),
    failureRedirect: loginRoute(),
  });

  console.log({ rLoader });
  return rLoader;
};

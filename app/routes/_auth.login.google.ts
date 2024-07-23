import type { ActionFunction } from '@remix-run/node';
import { authenticator } from '~/services/auth/auth.server';
import { homeRoute, loginRoute } from '~/utils/routes.utils';

export const action: ActionFunction = async ({ request }) => {
  const r = await authenticator.authenticate('google', request, {
    successRedirect: homeRoute(),
    failureRedirect: loginRoute(),
  });

  console.log({ r });

  return r;
};

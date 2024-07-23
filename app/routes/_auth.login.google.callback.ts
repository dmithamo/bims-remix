import type { LoaderFunction } from '@remix-run/node';
import { authenticator } from '~/services/auth/auth.server';
import { financeRoute, homeRoute } from '~/utils/routes.utils';

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.authenticate('google', request, {
    successRedirect: homeRoute(),
    failureRedirect: financeRoute(),
  });
};

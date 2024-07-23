import { authenticator } from '~/services/auth/auth.server';
import { ActionFunctionArgs } from '@remix-run/server-runtime';
import { loginRoute } from '~/utils/routes.utils';

export async function action({ request }: ActionFunctionArgs) {
  await authenticator.logout(request, { redirectTo: loginRoute() });
}

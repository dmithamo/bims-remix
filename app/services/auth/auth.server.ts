import { Authenticator } from 'remix-auth';
import { sessionStorage } from '~/services/auth/session.server';
import { FormStrategy } from 'remix-auth-form';
import { AuthResponse, login } from '~/api/auth/login';

export const authenticator = new Authenticator<AuthResponse>(sessionStorage, {
  sessionKey: 'bims.session',
  sessionErrorKey: 'bims.authenticationError',
});

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get('email') || '';
    const password = form.get('password') || '';

    return await login(email, password);
  }),
  'email-pass',
);

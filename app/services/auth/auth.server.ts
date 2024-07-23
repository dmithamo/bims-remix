import { Authenticator } from 'remix-auth';
import { sessionStorage } from '~/services/auth/session.server';
import { GoogleStrategy } from 'remix-auth-google';
import { SessionUser } from '~/utils/types';

const GOOGLE_OAUTH_CLIENT_ID = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID;
const GOOGLE_OAUTH_CLIENT_SECRET = import.meta.env
  .VITE_GOOGLE_OAUTH_CLIENT_SECRET;

const GOOGLE_OAUTH_CALLBACK_URL = import.meta.env.PROD
  ? `${import.meta.env.VITE_PROD_DOMAIN}/login/google/callback`
  : 'http://localhost:5173/login/google/callback';

const GOOGLE_STRATEGY = new GoogleStrategy<SessionUser>(
  {
    clientID: GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: GOOGLE_OAUTH_CLIENT_SECRET,
    callbackURL: GOOGLE_OAUTH_CALLBACK_URL,
  },
  async (profile: unknown) => {
    console.log({ profile });
    return profile as SessionUser;
  },
);

export const authenticator = new Authenticator(sessionStorage);
authenticator.use(GOOGLE_STRATEGY, 'google');

// app/sessions.ts
import { createCookieSessionStorage } from '@remix-run/node'; // or cloudflare/deno

type SessionData = {
  userId: string;
};

type SessionFlashData = {
  error: string;
};

const COOKIE_SECRET = import.meta.env.VITE_COOKIE_SECRET;
export const sessionStorage = createCookieSessionStorage<
  SessionData,
  SessionFlashData
>({
  cookie: {
    name: '__session',

    // all of these are optional
    domain: 'bims.dmithamo.dev',
    // Expires can also be set (although maxAge overrides it when used in combination).
    // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
    //
    httpOnly: true,
    maxAge: 60,
    path: '/',
    sameSite: 'lax',
    secrets: [COOKIE_SECRET],
    secure: true,
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;

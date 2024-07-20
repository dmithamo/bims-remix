import { type LoaderFunctionArgs } from '@remix-run/server-runtime';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  console.log({ request });
  return null;
};

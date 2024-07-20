import type { ReactElement } from 'react';
import { type MetaFunction } from '@remix-run/react';
import { type LoaderFunctionArgs } from '@remix-run/server-runtime';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  console.log({ request });
  return null;
};

export const meta: MetaFunction = () => [{ title: 'Settings' }];
export default function SettingsHome(): ReactElement {
  return (
    <div>
      <h3 className={'text-blue font-black'}>Settings home</h3>
    </div>
  );
}

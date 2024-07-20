import { type MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => [{ title: 'Bims | Create account' }];
export default function CreateAccount() {
  return (
    <div className={'text-red-500 font-black text-4xl'}>Create account</div>
  );
}

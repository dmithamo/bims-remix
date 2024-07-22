import { clsx } from 'clsx';
import { type LoaderFunctionArgs } from '@remix-run/server-runtime';
import { PlaceHolderText } from '~/components/lorem-ipsum';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  console.log({ request });
  return null;
};

export default function FinanceExpenses() {
  return (
    <div>
      <h3 className={clsx('text-blue font-black')}>Finance transactions</h3>
      <PlaceHolderText />
    </div>
  );
}

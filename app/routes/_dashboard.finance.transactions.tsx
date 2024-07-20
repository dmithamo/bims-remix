import { clsx } from 'clsx';
import { type LoaderFunctionArgs } from '@remix-run/server-runtime';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  console.log({ request });
  return null;
};

export default function FinanceExpenses() {
  return (
    <div>
      <h3 className={clsx('text-blue font-black')}>Finance transactions</h3>
    </div>
  );
}

import { clsx } from 'clsx';
import { PlaceHolderText } from '~/components/lorem-ipsum';

export default function FinanceExpenses() {
  return (
    <div>
      <h3 className={clsx('text-blue font-black')}>Finance transactions</h3>
      <PlaceHolderText />
    </div>
  );
}

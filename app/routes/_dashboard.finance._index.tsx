import { LoaderFunctionArgs } from '@remix-run/server-runtime';
import { PlaceHolderText } from '~/components/lorem-ipsum';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  console.log({ request });
  return null;
};

export default function FinanceIndex() {
  return (
    <div>
      <h3 className={'text-blue font-black'}>Finance home</h3>
      <div>
        <PlaceHolderText />
      </div>
    </div>
  );
}

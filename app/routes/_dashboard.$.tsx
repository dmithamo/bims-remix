import {
  type MetaFunction,
  useLoaderData,
  useNavigate,
} from '@remix-run/react';
import {
  AlignOption,
  DirectionOption,
  FlexContainer,
  JustifyOption,
} from '~/components/flex/flex-container';
import { HeightOption } from '~/components/utils/styles.utils';
import { type LoaderFunctionArgs } from '@remix-run/server-runtime';
import { clsx } from 'clsx';
import { AppFooter } from '~/components/app-nav/app-footer';

export const meta: MetaFunction = () => [{ title: 'Bims | 404' }];

export async function loader({ params, request }: LoaderFunctionArgs) {
  console.log({ request });

  return {
    status: 404,
    message: `Page not found: ${params['*']}`,
  };
}

export default function NotFoundPage() {
  const data = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  return (
    <>
      <FlexContainer
        height={HeightOption.full}
        direction={DirectionOption.column}
        align={AlignOption.center}
        justify={JustifyOption.center}>
        <div>
          <h1 className="text-8xl font-bold text-gray-700">{data.status}</h1>
          <p className="text-gray-500">{data.message}</p>
          <p className="text-gray-500 mb-4">
            You are lost. &nbsp;
            <button
              className={clsx(
                'text-accent',
                'cursor-pointer',
                'underline',
                'underline-offset-4',
              )}
              onClick={() => {
                navigate(-1);
              }}>
              Go back one step
            </button>
          </p>
        </div>
      </FlexContainer>
      <AppFooter />
    </>
  );
}

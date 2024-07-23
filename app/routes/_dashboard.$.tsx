import {
  type MetaFunction,
  useLoaderData,
  useNavigate,
} from '@remix-run/react';
import {
  AlignOption,
  DirectionOption,
  FlexContainer,
  GapOption,
  JustifyOption,
} from '~/components/flex/flex-container';
import { HeightOption } from '~/components/utils/styles.utils';
import { type LoaderFunctionArgs } from '@remix-run/server-runtime';
import { clsx } from 'clsx';
import { AppFooter } from '~/components/app-nav/app-footer';

export const meta: MetaFunction = () => [{ title: 'Bims | 404' }];

export async function loader({ params }: LoaderFunctionArgs) {
  return {
    status: 404,
    message: `The page at ${params['*']} does not currently exist, though it once might have.`,
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
        <FlexContainer
          direction={DirectionOption.column}
          gap={GapOption.large}
          align={AlignOption.start}
          className={'px-8'}>
          <h1 className="w-full text-8xl font-black opacity-20 text-center">
            {data.status}
          </h1>
          <p className="">{data.message}</p>
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
            Back
          </button>
        </FlexContainer>
      </FlexContainer>
      <AppFooter />
    </>
  );
}

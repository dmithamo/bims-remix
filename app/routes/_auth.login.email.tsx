import { CardContainer } from '~/components/card/card-container';
import { SpacingOption, WidthOption } from '~/components/utils/styles.utils';
import {
  AlignOption,
  DirectionOption,
  FlexContainer,
  GapOption,
  JustifyOption,
} from '~/components/flex/flex-container';
import {
  Form,
  type MetaFunction,
  useLoaderData,
  useNavigation,
} from '@remix-run/react';
import { InputField } from '~/components/form-fields/input-field';
import { InputType } from '~/components/utils/enums';
import { clsx } from 'clsx';
import { Button, ButtonStyle, ButtonType } from '~/components/button/button';
import { SendIcon } from '~/components/svg-icons/send-icon';
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from '@remix-run/server-runtime';
import { homeRoute, loginRoute } from '~/utils/routes.utils';
import { login } from '~/api/auth/login';
import { isValidSession } from '~/api/auth/is-valid-session';
import { ErrorAlert } from '~/components/alerts/error-alert';

export const meta: MetaFunction = () => [{ title: 'Bims | Login' }];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  console.log({ request });
  const session = null;

  if (isValidSession(session)) return redirect(homeRoute());
  return { error: 'Hello error' };
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const username = formData.get('username');
  const password = formData.get('password');

  const { error, sessionId, sessionUser } = await login(
    username ?? '',
    password ?? '',
  );

  console.log({ error, sessionId, sessionUser });
  return redirect(homeRoute());
}

export default function LoginWithEmail() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const { error } = useLoaderData<typeof loader>();

  return (
    <CardContainer
      width={WidthOption.full}
      isRaised={true}
      padding={SpacingOption.maximum}>
      <Form method={'post'} action={loginRoute()}>
        <FlexContainer
          direction={DirectionOption.column}
          gap={GapOption.maximum}>
          <h1 className={clsx('text-2xl font-bold')}>Login to your account</h1>

          {error && !isSubmitting && <ErrorAlert message={error} />}

          <FlexContainer
            width={WidthOption.full}
            direction={DirectionOption.column}
            gap={GapOption.large}>
            <InputField
              name={'username'}
              label={'Email'}
              type={InputType.email}
              placeholder={'Enter your email address'}
              required={true}
              isDisabled={isSubmitting}
            />

            <InputField
              name={'password'}
              label={'Password'}
              type={InputType.password}
              placeholder={'Enter your password'}
              required={true}
              isDisabled={isSubmitting}
            />
          </FlexContainer>

          <Button
            type={ButtonType.submit}
            style={ButtonStyle.primary}
            isDisabled={isSubmitting}>
            <FlexContainer
              direction={DirectionOption.row}
              gap={GapOption.maximum}
              align={AlignOption.center}
              justify={JustifyOption.center}
              className={'py-1'}>
              <SendIcon />
              <span className={'text-md font-bold'}>
                {isSubmitting ? 'Logging in...' : 'Login'}
              </span>
            </FlexContainer>
          </Button>
        </FlexContainer>
      </Form>
    </CardContainer>
  );
}

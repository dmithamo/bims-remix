import { HeightOption, WidthOption } from '~/components/utils/styles.utils';
import {
  AlignOption,
  DirectionOption,
  FlexContainer,
  GapOption,
  JustifyOption,
} from '~/components/flex/flex-container';
import { Form, useLoaderData, useNavigation } from '@remix-run/react';
import { clsx } from 'clsx';
import { Button, ButtonStyle, ButtonType } from '~/components/button/button';
import { SendIcon } from '~/components/svg-icons/send-icon';
import { json } from '@remix-run/server-runtime';
import { homeRoute, loginRoute } from '~/utils/routes.utils';
import { authenticator } from '~/services/auth/auth.server';
import AppHeader from '~/components/app-nav/app-header';
import { InputField } from '~/components/form-fields/input-field';
import { InputType } from '~/components/utils/enums';
import { ActionFunction, LoaderFunction } from '@remix-run/node';
import { commitSession, getSession } from '~/services/auth/session.server';
import { ErrorAlert } from '~/components/alerts/error-alert';

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    successRedirect: homeRoute(),
  });

  const session = await getSession(request.headers.get('cookie'));
  const error = session.get(authenticator.sessionErrorKey as 'error');

  return json(
    { error },
    {
      headers: { 'Set-Cookie': await commitSession(session) },
    },
  );
};

export const action: ActionFunction = async ({ request }) => {
  return authenticator.authenticate('email-pass', request, {
    successRedirect: homeRoute(),
  });
};

export default function Login() {
  const { error } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <FlexContainer
      direction={DirectionOption.column}
      align={AlignOption.start}
      justify={JustifyOption.between}
      width={WidthOption.full}
      height={HeightOption.screen}>
      <AppHeader />

      <FlexContainer
        direction={DirectionOption.column}
        width={WidthOption.full}
        gap={GapOption.maximum}
        className={'py-4'}>
        <div>
          <h1 className={clsx('text-2xl font-bold')}>Welcome to Bims</h1>
          <p>Sign in to your account to get started</p>
        </div>

        {error && <ErrorAlert message={error.message} />}

        <Form method={'post'} action={loginRoute()} className={'w-full'}>
          <FlexContainer
            width={WidthOption.full}
            direction={DirectionOption.column}
            gap={GapOption.large}
            align={AlignOption.center}>
            <InputField
              type={InputType.email}
              label={'Email address'}
              placeholder={'Enter your email address'}
              name={'email'}
            />
            <InputField
              type={InputType.password}
              label={'Password'}
              placeholder={'Enter your password'}
              name={'password'}
            />
            <Button
              type={ButtonType.submit}
              style={ButtonStyle.primary}
              isDisabled={isSubmitting}
              className={'mt-2'}>
              <FlexContainer
                direction={DirectionOption.row}
                gap={GapOption.maximum}
                align={AlignOption.center}
                justify={JustifyOption.center}>
                <SendIcon />
                <span className={'font-bold'}>
                  {isSubmitting ? 'Logging in...' : 'Sign in'}
                </span>
              </FlexContainer>
            </Button>
          </FlexContainer>
        </Form>
      </FlexContainer>

      <p className={'text-primary/45 text-xs py-12'}>
        By continuing, you accept our Terms and Conditions
      </p>
    </FlexContainer>
  );
}

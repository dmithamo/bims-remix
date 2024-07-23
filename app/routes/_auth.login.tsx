import { CardContainer } from '~/components/card/card-container';
import { SpacingOption, WidthOption } from '~/components/utils/styles.utils';
import {
  AlignOption,
  DirectionOption,
  FlexContainer,
  GapOption,
  JustifyOption,
} from '~/components/flex/flex-container';
import { Form, type MetaFunction, useNavigation } from '@remix-run/react';
import { clsx } from 'clsx';
import { Button, ButtonStyle, ButtonType } from '~/components/button/button';
import { SendIcon } from '~/components/svg-icons/send-icon';
import { LoaderFunctionArgs } from '@remix-run/server-runtime';
import { homeRoute, loginRoute } from '~/utils/routes.utils';
import { authenticator } from '~/services/auth/auth.server';
import AppHeader from '~/components/app-nav/app-header';

export const meta: MetaFunction = () => [{ title: 'Bims | Login' }];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return await authenticator.isAuthenticated(request, {
    // failureRedirect: new URL(request.url).pathname,
    successRedirect: homeRoute(),
  });
};

export default function Login() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <CardContainer
      width={WidthOption.full}
      isRaised={true}
      padding={SpacingOption.maximum}>
      <FlexContainer
        direction={DirectionOption.column}
        align={AlignOption.start}
        justify={JustifyOption.between}
        width={WidthOption.full}>
        <AppHeader />

        <FlexContainer
          direction={DirectionOption.column}
          width={WidthOption.full}
          gap={GapOption.none}
          className={'py-4'}>
          <h1 className={clsx('text-2xl font-bold')}>Welcome to Bims</h1>
          <p>Login to your account to get started</p>
        </FlexContainer>

        <Form
          method={'post'}
          action={loginRoute('google')}
          className={'w-full py-4'}>
          <Button
            type={ButtonType.submit}
            style={ButtonStyle.primary}
            isDisabled={isSubmitting}>
            <FlexContainer
              direction={DirectionOption.row}
              gap={GapOption.maximum}
              align={AlignOption.center}
              justify={JustifyOption.center}>
              <SendIcon />
              <span className={'text-md font-bold'}>
                {isSubmitting ? 'Logging in...' : 'Login with Google'}
              </span>
            </FlexContainer>
          </Button>
        </Form>

        <p className={'text-primary/45 text-xs'}>
          By continuing, you accept our Terms and Conditions
        </p>
      </FlexContainer>
    </CardContainer>
  );
}

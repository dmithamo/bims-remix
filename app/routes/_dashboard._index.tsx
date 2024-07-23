import { Logo } from '~/components/logo';
import { HeightOption } from '~/components/utils/styles.utils';
import {
  AlignOption,
  DirectionOption,
  FlexContainer,
  JustifyOption,
} from '~/components/flex/flex-container';
import { type MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => [{ title: 'bims' }];

export default function Index() {
  return (
    <FlexContainer
      direction={DirectionOption.column}
      align={AlignOption.center}
      justify={JustifyOption.center}
      height={HeightOption.full}>
      <div>
        <div>
          <Logo shouldClickToHome={false} />
          <p className={'opacity-80'}>Home is where the hearth is&trade;</p>
        </div>

        <p className={'absolute bottom-2 opacity-50 text-xs'}>
          <a
            href="https://github.com/dmithamo"
            target="_blank"
            rel="noreferrer"
            className={'underline underline-offset-2'}>
            &copy;2023 dmithamo — GitHub
          </a>
        </p>
      </div>
    </FlexContainer>
  );
}

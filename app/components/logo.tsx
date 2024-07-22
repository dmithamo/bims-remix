import { NavLink } from '@remix-run/react';
import { type ReactElement } from 'react';
import { homeRoute } from '~/utils/routes.utils';
import {
  AlignOption,
  FlexContainer,
  GapOption,
} from '~/components/flex/flex-container';

interface Props {
  shouldClickToHome: boolean;
}

export const Logo = (props: Props): ReactElement => {
  const { shouldClickToHome } = props;

  const Wrapper = ({
    children,
  }: {
    children: ReactElement | ReactElement[];
  }): ReactElement => {
    if (shouldClickToHome) {
      return <NavLink to={homeRoute()}>{children}</NavLink>;
    }

    return <>{children}</>;
  };
  return (
    <Wrapper>
      <FlexContainer
        align={AlignOption.center}
        gap={GapOption.medium}
        className="text-accent uppercase text-md font-black">
        <span className="">&#10058;</span>
        <span>{'///'}</span>
        <span>{'bims'}</span>
      </FlexContainer>
    </Wrapper>
  );
};

import { NavLink } from '@remix-run/react';
import { type ReactElement } from 'react';
import { homeRoute } from '~/utils/routes.utils';

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
      <span className="text-orange-500 text-2xl capitalize font-ops">bims</span>
    </Wrapper>
  );
};

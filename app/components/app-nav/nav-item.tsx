import { type ReactElement } from 'react';
import { NavLink } from '@remix-run/react';
import { clsx } from 'clsx';

interface Props {
  to: string;
  children: ReactElement;
  shouldMatchExact?: boolean;
}

export default function NavItem({
  to,
  children,
  shouldMatchExact = true,
}: Props): ReactElement {
  const linkClasses = ({ isActive }: { isActive: boolean }): string =>
    clsx('hover:text-accent', {
      'text-accent font-bold': isActive,
    });

  return (
    <NavLink end={shouldMatchExact} className={linkClasses} to={to}>
      {children}
    </NavLink>
  );
}

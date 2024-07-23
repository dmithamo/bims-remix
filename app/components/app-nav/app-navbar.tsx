import { type ReactElement } from 'react';
import {
  AlignOption,
  DirectionOption,
  FlexContainer,
  JustifyOption,
} from '~/components/flex/flex-container';
import { WidthOption } from '~/components/utils/styles.utils';
import { NavLink } from '@remix-run/react';
import { clsx } from 'clsx';
import { elementRounding } from '~/utils/styling-constants';

interface Props {
  navItems: Array<{
    to: string;
    label: string;
    icon: ReactElement;
  }>;
}

export default function AppNavbar(props: Props): ReactElement | null {
  const { navItems } = props;

  if (navItems.length < 2) return null;
  return (
    <nav
      className={clsx(
        `w-full flex items-center justify-center`,
        'fixed bottom-0 left-0',
        'p-6',
        'transition-all duration-200',
      )}>
      <FlexContainer
        className={clsx(
          'bg-primary',
          'p-1',
          elementRounding,
          'w-full sm:w-1/2',
        )}
        direction={DirectionOption.row}
        justify={JustifyOption.around}
        align={AlignOption.center}
        width={WidthOption.full}>
        {navItems.map(({ to, icon, label }) => (
          <SidebarItem key={to} to={to} label={label} icon={icon} />
        ))}
      </FlexContainer>
    </nav>
  );
}

function SidebarItem({
  to,
  label,
  icon,
}: {
  to: string;
  label: string;
  icon: ReactElement;
}): ReactElement {
  const linkClasses = ({ isActive }: { isActive: boolean }): string =>
    clsx(
      'w-full flex flex-col items-center gap-0',
      'justify-self-center',
      'hover:text-accent',
      isActive
        ? 'text-accent [&>*:nth-child(even)]:inline-block'
        : 'text-background',
    );

  return (
    <NavLink end={true} className={linkClasses} to={to}>
      {icon}
      <span className={'text-xs hidden'}>{label}</span>
    </NavLink>
  );
}

import { type ReactElement } from 'react';
import {
  AlignOption,
  DirectionOption,
  FlexContainer,
  GapOption,
  JustifyOption,
} from '~/components/flex/flex-container';
import { SpacingOption, WidthOption } from '~/components/utils/styles.utils';
import { NavLink } from '@remix-run/react';
import { clsx } from 'clsx';

interface Props {
  navItems: Array<{
    to: string;
    label: string;
    icon: ReactElement;
  }>;
}

export default function AppSidebar(props: Props): ReactElement {
  const { navItems } = props;

  return (
    <nav
      className={clsx(
        `w-full sm:w-fit sm:h-full`,
        'absolute bottom-0 left-0 sm:static',
        'py-2 sm:py-3 px-2',
        'bg-background-dark',
        'border-r border-r-background-dark',
        'transition-all duration-200',
      )}>
      <FlexContainer
        className={'flex-row sm:flex-col items-center justify-evenly'}
        gap={GapOption.maximum}
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
    clsx('w-full', 'hover:text-accent', isActive ? 'text-accent' : '');

  return (
    <NavLink end={true} className={linkClasses} to={to}>
      <FlexContainer
        justify={JustifyOption.start}
        gap={GapOption.minimum}
        align={AlignOption.center}
        width={WidthOption.full}
        direction={DirectionOption.column}
        marginY={SpacingOption.large}>
        {icon}
        <span className={'text-xs'}>{label}</span>
      </FlexContainer>
    </NavLink>
  );
}

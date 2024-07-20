import { type ReactElement, useRef, useState } from 'react';
import {
  AlignOption,
  DirectionOption,
  FlexContainer,
  GapOption,
  JustifyOption,
} from '~/components/flex/flex-container';
import {
  HeightOption,
  SpacingOption,
  WidthOption,
} from '~/components/utils/styles.utils';
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { navItems } = props;
  const ref = useRef<HTMLDivElement>(null);

  const collapseSidebar = (): void => {
    setIsSidebarOpen(false);
  };

  return (
    <nav
      className={clsx(
        'h-full',
        'p-4',
        isSidebarOpen ? 'w-[20rem]' : 'w-[5rem]',
        'bg-background-dark',
        'border-r border-r-background-dark',
        'transition-all duration-200',
        'z-10',
      )}
      ref={ref}>
      <FlexContainer
        gap={GapOption.maximum}
        direction={DirectionOption.column}
        height={HeightOption.full}
        width={WidthOption.full}>
        {navItems.map(({ to, icon, label }) => (
          <button onClick={collapseSidebar} key={to}>
            <SidebarItem
              key={to}
              to={to}
              showLabel={isSidebarOpen}
              label={label}
              icon={icon}
            />
          </button>
        ))}
      </FlexContainer>
    </nav>
  );
}

function SidebarItem({
  to,
  label,
  icon,
  showLabel,
}: {
  to: string;
  label: string;
  icon: ReactElement;
  showLabel: boolean;
}): ReactElement {
  const linkClasses = ({ isActive }: { isActive: boolean }): string =>
    clsx(
      'w-full',
      'hover:text-accent',
      isActive ? 'text-accent font-bold' : '',
    );

  return (
    <NavLink end={true} className={linkClasses} to={to}>
      <FlexContainer
        justify={showLabel ? JustifyOption.start : JustifyOption.center}
        gap={showLabel ? GapOption.large : GapOption.default}
        align={AlignOption.center}
        width={WidthOption.full}
        marginY={SpacingOption.large}>
        {icon}
        <span className={'text-sm'}>{showLabel ? label : null}</span>
      </FlexContainer>
    </NavLink>
  );
}

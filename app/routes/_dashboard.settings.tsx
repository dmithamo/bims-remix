import { type ReactElement } from 'react';
import { settingsRoute } from '~/utils/routes.utils';
import { LayoutWithNavbar } from '~/components/layouts/layout-with-navbar';
import { CogIcon } from '~/components/svg-icons/cog-icon';
import { type MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => [{ title: 'Finance' }];

const iconWidthHeight = 'w-7 h-7';

const SIDEBAR_LINKS: Array<{
  to: string;
  label: string;
  icon: ReactElement;
}> = [
  {
    to: settingsRoute(),
    label: 'Settings',
    icon: <CogIcon widthHeight={iconWidthHeight} />,
  },
];

export default function SettingsLayout() {
  return <LayoutWithNavbar navLinks={SIDEBAR_LINKS} />;
}

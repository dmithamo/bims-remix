/**
 * Parse role(s) from session user for permissions array
 */
import { App, Role, SessionData, UUID } from '~/utils/types';
import {
  assetsRoute,
  financeRoute,
  timelinesRoute,
} from '~/utils/routes.utils';

const TEMP_ACCOUNT_IDS: UUID[] = [
  '4f5038d1-26b9-468b-9e5c-e1fd05303a65',
  '9d2e758e-697a-4f3b-a137-fd77fed45e68',
  '9d2e758e-697a-4f3b-a137-fd77fed45e68',
];

const TEMP_ROLE_IDS: UUID[] = [
  '89166613-aaed-44a7-9393-b992caf0ac42',
  '9d2e758e-697a-4f3b-a137-fd77fed45e68',
  '9d2e758e-697a-4f3b-a137-fd77fed45e68',
];

const TEMP_DB_ROLES: Record<string, Role[]> = {
  [TEMP_ACCOUNT_IDS[0]]: [
    {
      id: TEMP_ROLE_IDS[0],
      name: 'Admin',
      permissions: ['finance', 'assets', 'timelines', 'calender'],
    },
    {
      id: TEMP_ROLE_IDS[1],
      name: 'Finance manager',
      permissions: ['finance'],
    },
    {
      id: TEMP_ROLE_IDS[2],
      name: 'Assets manager',
      permissions: ['assets'],
    },
  ],

  [TEMP_ACCOUNT_IDS[1]]: [
    {
      id: TEMP_ROLE_IDS[0],
      name: 'Admin',
      permissions: ['finance', 'assets', 'timelines', 'calender'],
    },
    {
      id: TEMP_ROLE_IDS[1],
      name: 'Finance manager',
      permissions: ['finance'],
    },
  ],
};

const TEMP_APP_IDS: UUID[] = [
  '9d2e758e-697a-4f3b-a137-fd77fed45e68',
  '9d2e758e-697a-4f3b-a137-fd77fed45e69',
  '9d2e758e-697a-4f3b-a137-fd77fed45e60',
];

const TEMP_DB_APPS: Record<string, App> = {
  [TEMP_APP_IDS[0]]: {
    id: TEMP_APP_IDS[0],
    name: 'Finance',
    href: financeRoute(),
    permissions: ['finance:read'],
  },

  [TEMP_APP_IDS[1]]: {
    id: TEMP_APP_IDS[1],
    name: 'Assets',
    href: assetsRoute(),
    permissions: ['assets:read'],
  },

  [TEMP_APP_IDS[2]]: {
    id: TEMP_APP_IDS[2],
    name: 'Timelines',
    href: timelinesRoute(),
    permissions: ['timelines:read', 'calender:read'],
  },
};

export const getPermissionsFromSession = ({
  sessionUser: { account, role },
}: SessionData) => {
  const accountRoles = TEMP_DB_ROLES[account.id] ?? [];
  const userRole = accountRoles.find(r => r.id === role.id);
  return userRole?.permissions ?? [];
};

export const getAllowedAppsFromSession = (sessionData: SessionData) => {
  const userPermissions = getPermissionsFromSession(sessionData);

  return Object.values(TEMP_DB_APPS).filter(app =>
    app.permissions.every(appPerm =>
      userPermissions.some(userPerm => appPerm.startsWith(userPerm)),
    ),
  );
};

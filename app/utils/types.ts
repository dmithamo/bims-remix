import { type ReactElement } from 'react';

export type UUID = ReturnType<typeof crypto.randomUUID>;

export type SessionUser = {
  id: UUID;
  name: string;
  email: string;
  account: Account;
  avatar?: string;
  role: {
    name: string;
    id: UUID;
  };
};

export type SessionData = {
  sessionUser: SessionUser;
  sessionId: UUID;
};

export type App = {
  name: string;
  id: UUID;
  href: string;
  permissions: Permission[]; // Minimum permissions required to access the app's root route
  description?: string;
};

export type IAppWithIcon = App & {
  icon: ReactElement;
};

export type UserPrefs = {
  theme: 'light' | 'dark' | 'system';
  allowNotifications: boolean;
};

export type Permission = `${string}:${string}` | string;
export type Role = {
  id: UUID;
  name: string;
  permissions: Permission[];
};
export type Account = {
  id: UUID;
  name: string;
};

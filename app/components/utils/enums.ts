export enum InputType {
  text = 'text',
  password = 'password',
  email = 'email',
  tel = 'tel',
  number = 'number',
  date = 'date',
  time = 'time',
  datetime = 'datetime',
}

export enum LogoSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum AppRoute {
  login = '/auth/login',
  logout = '/auth/logout',
  moneyOverview = '/money',
  moneyBudget = '/money/budget',
  moneyTransactions = '/money/transactions',
  moneySettings = '/money/settings',
  notifications = '/notifications',
  account = '/account',
  profile = '/profile',
  timelinesOverview = '/timelines',
  timelinesSettings = '/timelines/settings',
  assetsOverview = '/assets',
  assetsSettings = '/assets/settings',
}

export enum AppErrorCode {
  'NOT_FOUND' = 'NOT_FOUND',
  'GENERIC_ERROR' = 'GENERIC_ERROR',
  'UNAUTHORIZED' = 'UNAUTHORIZED',
}

export enum AppIcon {
  moneyOverview = 'solar:wallet-2-outline',
  moneyBudget = 'solar:pie-chart-2-broken',
  moneyTransactions = 'solar:card-transfer-outline',
  accountSettings = 'solar:shield-user-outline',
  notifications = 'solar:bell-outline',
  userAvatar = 'solar:user-circle-outline',
  close = 'carbon:close',
  login = 'uiw:login',
  logout = 'uiw:logout',
  id = 'solar:user-id-outline',
  timelinesOverview = 'solar:calendar-outline',
  assetsOverview = 'solar:safe-square-outline',
  settings = 'solar:settings-linear',
}

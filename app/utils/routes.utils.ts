type Route = (param?: string) => string;

export const homeRoute: Route = () => '/';
export const accessControlRoute: Route = () => '/iam';
export const financeRoute: Route = (tab: string = '') => `/finance/${tab}`;
export const assetsRoute: Route = () => '/assets';
export const timelinesRoute: Route = () => '/timelines';
export const settingsRoute: Route = (tab: string = '') => `/settings/${tab}`;
export const notificationsRoute: Route = () => '/notifications';
export const loginRoute: Route = () => '/login';

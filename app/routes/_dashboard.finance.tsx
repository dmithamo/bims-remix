import { type ReactElement } from 'react';
import { financeRoute } from '~/utils/routes.utils';
import { TransactionsIcon } from '~/components/svg-icons/transactions-icon';
import { BudgetIcon } from '~/components/svg-icons/budget-icon';
import { BriefcaseIcon } from '~/components/svg-icons/briefcase-icon';
import { LayoutWithNavbar } from '~/components/layouts/layout-with-navbar';
import { FinanceTab } from '~/utils/enums';
import { type MetaFunction } from '@remix-run/react';
import { WalletIcon } from '~/components/svg-icons/wallet-icon';

export const meta: MetaFunction = () => [{ title: 'Finance' }];

const iconWidthHeight = 'w-8 h-8';

const SIDEBAR_LINKS: Array<{
  to: string;
  label: string;
  icon: ReactElement;
}> = [
  {
    to: financeRoute(),
    label: 'Overview',
    icon: <WalletIcon widthHeight={iconWidthHeight} />,
  },
  {
    to: financeRoute(FinanceTab.budgets),
    label: 'Budget',
    icon: <BudgetIcon widthHeight={iconWidthHeight} />,
  },
  {
    to: financeRoute(FinanceTab.transactions),
    label: 'Transactions',
    icon: <TransactionsIcon widthHeight={iconWidthHeight} />,
  },
  {
    to: financeRoute(FinanceTab.investments),
    label: 'Investments',
    icon: <BriefcaseIcon widthHeight={iconWidthHeight} />,
  },
];

export default function FinanceLayout() {
  return <LayoutWithNavbar navLinks={SIDEBAR_LINKS} />;
}

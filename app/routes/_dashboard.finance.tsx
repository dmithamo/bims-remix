import { type ReactElement } from 'react';
import { financeRoute } from '~/utils/routes.utils';
import { ExpenseIcon } from '~/components/svg-icons/expense-icon';
import { BudgetIcon } from '~/components/svg-icons/budget-icon';
import { BriefcaseIcon } from '~/components/svg-icons/briefcase-icon';
import { OverviewIcon } from '~/components/svg-icons/overview-icon';
import { LayoutWithSidebar } from '~/components/layouts/with-sidebar';
import { FinanceTab } from '~/utils/enums';
import { type MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => [{ title: 'Finance' }];

const iconWidthHeight = 'w-5 h-5 sm:w-7 sm:h-7';

const SIDEBAR_LINKS: Array<{
  to: string;
  label: string;
  icon: ReactElement;
}> = [
  {
    to: financeRoute(),
    label: 'Overview',
    icon: <OverviewIcon widthHeight={iconWidthHeight} />,
  },
  {
    to: financeRoute(FinanceTab.budgets),
    label: 'Budget',
    icon: <BudgetIcon widthHeight={iconWidthHeight} />,
  },
  {
    to: financeRoute(FinanceTab.transactions),
    label: 'Transactions',
    icon: <ExpenseIcon widthHeight={iconWidthHeight} />,
  },
  {
    to: financeRoute(FinanceTab.investments),
    label: 'Investments',
    icon: <BriefcaseIcon widthHeight={iconWidthHeight} />,
  },
];

export default function FinanceLayout() {
  return <LayoutWithSidebar sidebarLinks={SIDEBAR_LINKS} />;
}

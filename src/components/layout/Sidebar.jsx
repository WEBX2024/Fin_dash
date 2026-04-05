import { useAppContext } from '../../context/useAppContext';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const NAV_ITEMS = [
  { key: 'dashboard',    label: 'Dashboard',    icon: DashboardIcon },
  { key: 'transactions', label: 'Transactions', icon: ReceiptLongIcon },
  { key: 'insights',     label: 'Insights',     icon: AnalyticsIcon },
];

export default function Sidebar({ open, onClose }) {
  const { currentPage, setCurrentPage } = useAppContext();

  const handleNav = (key) => {
    setCurrentPage(key);
    onClose();
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-200 dark:border-gray-700 dark:bg-gray-900 lg:static lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center border-b border-gray-200 px-5 dark:border-gray-700 lg:hidden">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            <span className="text-primary">Finance</span> Dashboard
          </span>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {NAV_ITEMS.map(({ key, label, icon }) => {
            const Icon = icon;
            const active = currentPage === key;
            return (
              <button
                key={key}
                id={`nav-${key}`}
                onClick={() => handleNav(key)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {label}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

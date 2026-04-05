import { useAppContext } from '../../context/useAppContext';
import MenuIcon from '@mui/icons-material/Menu';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Header({ onMenuToggle }) {
  const { role, theme, toggleRole, toggleTheme } = useAppContext();
  const isDark = theme === 'dark';
  const isAdmin = role === 'admin';

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white/80 px-4 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/80 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          id="menu-toggle"
          onClick={onMenuToggle}
          className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
          aria-label="Toggle sidebar"
        >
          <MenuIcon className="h-5 w-5" />
        </button>

        <h1 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">
          <span className="text-primary">Finance</span> Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          id="role-toggle"
          onClick={toggleRole}
          className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
          title={`Switch to ${isAdmin ? 'Viewer' : 'Admin'}`}
        >
          {isAdmin ? (
            <AdminPanelSettingsIcon className="h-4 w-4 text-primary" />
          ) : (
            <VisibilityIcon className="h-4 w-4 text-gray-400" />
          )}

          <span className="hidden sm:inline dark:text-gray-200">
            {isAdmin ? 'Admin' : 'Viewer'}
          </span>

          <span
            className={`h-2 w-2 rounded-full ${isAdmin ? 'bg-emerald-400' : 'bg-amber-400'}`}
          />
        </button>

        <button
          id="theme-toggle"
          onClick={toggleTheme}
          className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? (
            <LightModeIcon className="h-5 w-5" />
          ) : (
            <DarkModeIcon className="h-5 w-5" />
          )}
        </button>
      </div>
    </header>
  );
}

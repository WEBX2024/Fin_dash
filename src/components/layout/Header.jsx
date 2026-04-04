import { useAppContext } from '../../context/useAppContext';

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
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
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
            <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          ) : (
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
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
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

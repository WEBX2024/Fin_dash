import { useState } from 'react'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './pages/Dashboard'
import { useAppContext } from './context/useAppContext'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { currentPage } = useAppContext()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onMenuToggle={() => setSidebarOpen((v) => !v)} />

      <div className="flex">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'transactions' && <Placeholder title="Transactions" />}
          {currentPage === 'insights' && <Placeholder title="Insights" />}
        </main>
      </div>
    </div>
  )
}

function Placeholder({ title }) {
  return (
    <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
      <p className="text-gray-400 dark:text-gray-500">{title} — coming soon</p>
    </div>
  )
}

export default App


import { useState } from 'react'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import Insights from './pages/Insights'
import { useAppContext } from './context/useAppContext'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { currentPage } = useAppContext()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onMenuToggle={() => setSidebarOpen((v) => !v)} />

      <div className="flex">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'transactions' && <Transactions />}
          {currentPage === 'insights' && <Insights />}
        </main>
      </div>
    </div>
  )
}

export default App

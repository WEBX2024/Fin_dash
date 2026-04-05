import { useMemo } from 'react'
import { useAppContext } from '../context/useAppContext'
import { formatCurrency } from '../utils/helpers'
import SummaryCard from '../components/dashboard/SummaryCard'

export default function Dashboard() {
  const { transactions } = useAppContext()

  const { totalIncome, totalExpenses, balance } = useMemo(() => {
    let income = 0
    let expenses = 0
    transactions.forEach((t) => {
      if (t.type === 'income') income += t.amount
      else expenses += t.amount
    })
    return { totalIncome: income, totalExpenses: expenses, balance: income - expenses }
  }, [transactions])

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Dashboard</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <SummaryCard label="Total Balance" value={formatCurrency(balance)} icon="💰" color="text-primary" />
        <SummaryCard label="Total Income" value={formatCurrency(totalIncome)} icon="📈" color="text-emerald-600" />
        <SummaryCard label="Total Expenses" value={formatCurrency(totalExpenses)} icon="📉" color="text-red-500" />
      </div>
    </div>
  )
}

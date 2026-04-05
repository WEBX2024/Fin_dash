import { useState } from 'react'
import { useAppContext } from '../context/useAppContext'
import { useTransactions } from '../hooks/useTransactions'
import TransactionTable from '../components/transactions/TransactionTable'
import AddTransactionModal from '../components/transactions/AddTransactionModal'

export default function Transactions() {
  const { transactions, role, addTransaction } = useAppContext()
  const [showModal, setShowModal] = useState(false)
  const {
    filtered,
    searchQuery,
    setSearchQuery,
    typeFilter,
    setTypeFilter,
    sortField,
    sortDirection,
    toggleSort,
  } = useTransactions(transactions)

  const isAdmin = role === 'admin'

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between h-10">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Transactions</h2>
        {isAdmin && (
          <button
            id="add-transaction-btn"
            onClick={() => setShowModal(true)}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
          >
            + Add Transaction
          </button>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          id="search-input"
          type="text"
          placeholder="Search by description or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 sm:w-64"
        />
        <select
          id="type-filter"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="w-full sm:w-auto rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
        >
          <option value="all">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <TransactionTable
        transactions={filtered}
        sortField={sortField}
        sortDirection={sortDirection}
        onSort={toggleSort}
      />

      {showModal && (
        <AddTransactionModal
          onAdd={addTransaction}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

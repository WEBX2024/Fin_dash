import { formatCurrency, formatDate } from '../../utils/helpers'

const COLUMNS = [
  { key: 'date',        label: 'Date' },
  { key: 'description', label: 'Description' },
  { key: 'category',    label: 'Category' },
  { key: 'type',        label: 'Type' },
  { key: 'amount',      label: 'Amount' },
]

export default function TransactionTable({ transactions, sortField, sortDirection, onSort }) {
  const sortIcon = (field) => {
    if (sortField !== field) return '↕'
    return sortDirection === 'asc' ? '↑' : '↓'
  }

  if (transactions.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
        <p className="text-gray-400 dark:text-gray-500">No transactions found.</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
      <table className="w-full min-w-[700px] text-left text-sm">
        <thead className="border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
          <tr>
            {COLUMNS.map(({ key, label }) => (
              <th
                key={key}
                onClick={() => onSort(key)}
                className="cursor-pointer whitespace-nowrap px-4 py-3 font-medium text-gray-500 select-none hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {label} <span className="ml-1 text-xs">{sortIcon(key)}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white dark:divide-gray-700 dark:bg-gray-900">
          {transactions.map((t) => (
            <tr key={t.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
              <td className="whitespace-nowrap px-4 py-3 text-gray-600 dark:text-gray-300">
                {formatDate(t.date)}
              </td>
              <td className="px-4 py-3 text-gray-900 dark:text-gray-100">
                {t.description}
              </td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                  {t.category}
                </span>
              </td>
              <td className="px-4 py-3">
                <span className={`text-xs font-medium ${t.type === 'income' ? 'text-emerald-600' : 'text-red-500'}`}>
                  {t.type === 'income' ? 'Income' : 'Expense'}
                </span>
              </td>
              <td className={`whitespace-nowrap px-4 py-3 font-medium ${t.type === 'income' ? 'text-emerald-600' : 'text-red-500'}`}>
                {t.type === 'income' ? '+' : '-'}{formatCurrency(t.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

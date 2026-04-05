import { useMemo } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function BalanceTrendChart({ transactions }) {
  const data = useMemo(() => {
    const grouped = {}

    transactions.forEach((t) => {
      const month = t.date.slice(0, 7)
      if (!grouped[month]) grouped[month] = { income: 0, expense: 0 }
      if (t.type === 'income') grouped[month].income += t.amount
      else grouped[month].expense += t.amount
    })

    const months = Object.keys(grouped).sort()
    const result = []
    let runningBalance = 0

    for (const month of months) {
      runningBalance += grouped[month].income - grouped[month].expense
      result.push({
        month: new Date(month + '-01').toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
        balance: runningBalance,
      })
    }
    console.log(result)
    return result
  }, [transactions])

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
      <h3 className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">Balance Trend</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#9ca3af" />
            <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
                borderRadius: '8px',
                color: '#f9fafb',
                fontSize: '13px',
              }}
              formatter={(value) => [`$${value.toLocaleString()}`, 'Balance']}
            />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.15}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

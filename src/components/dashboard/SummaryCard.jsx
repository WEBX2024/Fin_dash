export default function SummaryCard({ label, value, icon, color = 'text-gray-900' }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
        <span className="text-xl">{icon}</span>
      </div>
      <p className={`mt-2 text-2xl font-semibold ${color}`}>{value}</p>
    </div>
  )
}

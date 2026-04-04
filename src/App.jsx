import Header from './components/layout/Header'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onMenuToggle={() => {}} />
      <main className="p-4 sm:p-6">
        <p className="text-center text-gray-500 dark:text-gray-400">
          Setup complete — building in progress.
        </p>
      </main>
    </div>
  )
}

export default App

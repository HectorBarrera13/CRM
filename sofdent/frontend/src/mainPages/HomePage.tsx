function HomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
          Dashboard
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Welcome to your dental practice management system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 h-full">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
            Pendientes
          </h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">1,234</p>
        </div>
        <div className="grid md:grid-rows-2 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
              Cumpleaños
            </h3>
            <p className="text-3xl font-bold text-green-600 mt-2">12</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
              Recordar citas
            </h3>
            <p className="text-3xl font-bold text-green-600 mt-2">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

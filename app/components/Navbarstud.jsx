
export default function Navbarstud() {
  return (
    <nav className="w-full bg-gradient-to-r from-yellow-500 to-purple-600 text-white py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 shadow-lg z-50">
    <div className="flex items-center gap-4">
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="focus:outline-none">
        <menu className="w-6 h-6" />
      </button>
      <h1 className="text-3xl font-bold tracking-wide"><a href="/" className="hover:text-purple-700 transition duration-100">SAPT</a></h1>
    </div>
  </nav>
  );
}

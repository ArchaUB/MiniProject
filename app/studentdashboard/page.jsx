"use client";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      {/* Navbar */}
      <nav className="w-full bg-gray-900 py-4 px-10 flex justify-between items-center fixed top-0 left-0 right-0 shadow-md z-50">
        <h1 className="text-white text-xl font-bold">SAPT</h1>
        <a href="/" className="text-white hover:underline">Home</a>
      </nav>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-20">
        {/* Soft Skills Test Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-purple-300">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Soft Skills Test</h2>
          <button
            onClick={() => router.push("/soft-skills-test")}
            className="bg-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-purple-800 transition-all font-medium"
          >
            Attempt Test
          </button>
        </div>

        {/* Coding Test Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-blue-300">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Coding Test</h2>
          <button
            onClick={() => router.push("/coding-test")}
            className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-800 transition-all font-medium"
          >
            Attempt Test
          </button>
        </div>

        {/* Aptitude Test Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-green-300">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Aptitude Test</h2>
          <button
            onClick={() => router.push("/aptitude-test")}
            className="bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-800 transition-all font-medium"
          >
            Attempt Test
          </button>
        </div>
      </div>
    </div>
  );
}

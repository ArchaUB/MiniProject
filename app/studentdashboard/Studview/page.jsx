"use client";
import { useRouter } from "next/navigation";

export default function StudentDashboard() {
    const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-50 to-purple-100 p-10">
      {/* Navbar */}
      <nav className="w-full bg-gray-900 py-4 px-10 flex justify-between items-center fixed top-0 left-0 right-0 shadow-md z-50">
        <h1 className="text-white text-xl font-bold">SAPT</h1>
        <a href="/" className="text-white hover:underline">Home</a>
      </nav>
      
      <div className="mt-20 text-center">
        <h1 className="text-4xl font-bold mb-10 text-gray-900 drop-shadow-lg tracking-wide">
          Try these tests....
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl mt-10">
        {/* Soft Skills Test Card */}
        <div className="bg-white p-10 rounded-3xl shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-purple-300">
          <h2 className="text-3xl font-semibold mb-6 text-purple-700">Soft Skills Test</h2>
          <button
            onClick={() => router.push("/soft-skills-test")}
            className="bg-purple-600 text-white px-10 py-3 rounded-full shadow-md hover:bg-purple-800 transition-all font-medium"
          >
            Attempt Test
          </button>
        </div>

        {/* Coding Test Card */}
        <div className="bg-white p-10 rounded-3xl shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-blue-300">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Coding Test</h2>
          <button
            onClick={() => router.push("/coding-test")}
            className="bg-blue-600 text-white px-10 py-3 rounded-full shadow-md hover:bg-blue-800 transition-all font-medium"
          >
            Attempt Test
          </button>
        </div>

        {/* Aptitude Test Card */}
        <div className="bg-white p-10 rounded-3xl shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-green-300">
          <h2 className="text-3xl font-semibold mb-6 text-green-700">Aptitude Test</h2>
          <button
            onClick={() => router.push("/studentdashboard/Studview/aptitudetest")}
            className="bg-green-600 text-white px-10 py-3 rounded-full shadow-md hover:bg-green-800 transition-all font-medium"
          >
            Attempt Test
          </button>
        </div>
      </div>
    </div>
  );
}

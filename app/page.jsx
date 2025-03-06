"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-purple-600 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-blue bg-opacity-10 backdrop-blur-md shadow-md py-4 px-8 flex justify-between items-center text-lg text-white">
        <h1 className="text-2xl font-bold">SAPT</h1>
        <ul className="flex space-x-6">
          <li className="hover:text-red-300 cursor-pointer ">Home</li>
          <li className="hover:text-orange-300 cursor-pointer">About Us</li>
          <li className="hover:text-orange-300 cursor-pointer">Contact</li>
        </ul>
        <button
          onClick={() => router.push("/login")}
          className="bg-orange-400 text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-yellow-300 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-500"
        >
          Sign In
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center bg-blue bg-opacity-10 p-10 rounded-2xl shadow-lg backdrop-blur-md">
          <h1 className="text-5xl font-extrabold mb-4 ">Welcome to Skill Assessment and Placement Training platform</h1>
          <p className="text-lg mb-6 opacity-80">Your gateway to acing interviews and landing your dream job</p>
          <button
            onClick={() => router.push("/login")}
            className="bg-orange-300 text-gray-900 font-semibold px-8 py-3 rounded-lg text-lg hover:bg-yellow-300 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-500"
          >
            Get Started
          </button>
          <p className="mt-6 text-gray-200">
            Are you a teacher? {" "}
            <button
              onClick={() => router.push("/teacherlogin")}
              className="text-orange-300 hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              Sign in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
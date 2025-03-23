"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[url('https://images.pexels.com/photos/733852/pexels-photo-733852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center text-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-blue bg-opacity-10 backdrop-blur-md shadow-md py-4 px-8 flex justify-between items-center text-lg text-black">
        <h1 className="text-2xl font-bold ">SAPT</h1>
        <ul className="flex space-x-6">
          <li className="hover:text-teal-300 cursor-pointer ">Home</li>
          <li className="hover:text-teal-300 cursor-pointer">About Us</li>
          <li className="hover:text-teal-300 cursor-pointer">Contact</li>
        </ul>
        <button
  onClick={() => router.push("/login")}
  className="bg-[#d2b48c] text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-[#c4a484] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#e5c7a1]"
>
  Sign In
</button>

      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen">
      <div className="text-center bg-yellow bg-opacity-10 p-10 rounded-2xl shadow-2xl shadow-gray-500 backdrop-blur-md">
      <h1 className="text-4xl font-extrabold mb-4 ">Welcome to Skill Assessment and Placement Training platform</h1>
          <p className="text-lg mb-6 opacity-80">Your gateway to acing interviews and landing your dream job</p>
          <button
  onClick={() => router.push("/login")}
  className="bg-[#d2b48c] text-gray-900 font-semibold px-8 py-3 rounded-lg text-lg hover:bg-[#c4a484] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#e5c7a1]"
>
  Get Started
</button>


          <p className="mt-6 text-gray-900">
            Are you a teacher? {" "}
            <button
  onClick={() => router.push("/teacherlogin")}
  className="text-[#d2b48c] hover:underline focus:outline-none focus:ring-2 focus:ring-[#e5c7a1]"
>
  Sign in here
</button>

          </p>
        </div>
      </div>
    </div>
  );
}
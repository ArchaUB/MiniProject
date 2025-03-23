"use client";
import { Card, CardContent, CardTitle } from "../components/card";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react"; // Import useState

export default function TeacherDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Add state

  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col bg-white">
<nav className="w-full bg-gradient-to-r from-yellow-500 to-purple-600 text-white py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 shadow-lg z-50">
        <div className="flex items-center gap-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="focus:outline-none">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-3xl font-bold tracking-wide"><a href="/" className="hover:text-purple-700 transition duration-100">SAPT</a></h1>
        </div>
      </nav>

      {/* Sidebar */}
      {sidebarOpen && (
  <div
    className="fixed inset-0 bg-opacity-20 backdrop-blur-sm z-40"
    onClick={() => setSidebarOpen(false)}
  >
    <aside
      className={`fixed top-16 left-0 w-64 bg-white p-6 shadow-xl h-full z-50 transition-transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className="space-y-4 text-gray-700 font-medium">
      <a
          href="#"
          className="block py-3 px-5 rounded-lg hover:bg-gradient-to-br hover:from-yellow-500 hover:to-purple-600 hover:text-white transition duration-300 cursor-pointer"
        >
profile        </a>

       
        <a
          href="#"
          className="block py-3 px-5 rounded-lg hover:bg-gradient-to-br hover:from-yellow-500 hover:to-purple-600 hover:text-white transition duration-300 cursor-pointer"
        >
My classes        </a>
        <a
          href="#"
          className="block py-3 px-5 rounded-lg hover:bg-gradient-to-br hover:from-yellow-500 hover:to-purple-600 hover:text-white transition duration-300 cursor-pointer"
        >
          Study Materials
        </a>
        <a
          href="#"
          className="block py-3 px-5 rounded-lg hover:bg-gradient-to-br hover:from-yellow-500 hover:to-purple-600 hover:text-white transition duration-300 cursor-pointer"
        >
settings        </a>
<a
          href="#"
          className="block py-3 px-5 rounded-lg hover:bg-gradient-to-br hover:from-yellow-500 hover:to-purple-600 hover:text-white transition duration-300 cursor-pointer"
        >
Logout        </a>
      </nav>
    </aside>
  </div>
)}
      <div className="flex flex-col flex-grow items-center justify-center">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Manage Tests</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <button className="cursor-pointer" onClick={() => router.push("/teacherdashboard/CreateTest")}>  <Card >
            <CardTitle>Create Test</CardTitle>
            <CardContent>Design and create new tests with ease.</CardContent>
          </Card></button>

          <button className="cursor-pointer" onClick={() => router.push("/teacherdashboard/ViewTest")}> 
          <Card>
            <CardTitle>View Test</CardTitle>
            <CardContent>Browse and manage existing tests.</CardContent>
          </Card></button>

        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";

const StudentDashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Math Assignment", deadline: "2025-03-08" },
    { id: 2, title: "Science Project", deadline: "2025-03-07" },
    { id: 3, title: "English Essay", deadline: "2025-03-06" },
  ]);

  const student = {
    name: "John Doe",
    className: "S6 IT",
    completedTasks: 14,
    totalTasks: 20,
    rank: 5,
    level: "Topper",
  };

  useEffect(() => {
    setTasks((prevTasks) =>
      [...prevTasks].sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 shadow-lg z-50">
        <h1 className="text-3xl font-bold tracking-wide">SAPT</h1>
        <a href="/" className="hover:underline text-sm font-medium">Home</a>
      </nav>

      <div className="flex flex-row mt-16 h-full">
        {/* Sidebar */}
        <aside className="w-1/6 bg-white p-6 shadow-xl min-h-screen border-r border-gray-300">
          <nav className="space-y-4 text-gray-700 font-medium">
            <a href="#" className="block py-3 px-5 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">Soft Skills</a>
            <a href="#" className="block py-3 px-5 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">Aptitude Test</a>
            <a href="#" className="block py-3 px-5 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">Coding Test</a>
            <a href="#" className="block py-3 px-5 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">Attendance</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-8 grid grid-cols-3 gap-6">
          {/* To-Do List */}
          <section className="bg-white p-6 shadow-xl rounded-xl col-span-2">
            <h2 className="text-lg font-semibold text-center border-b pb-2 text-gray-800">To-Do List</h2>
            <ul className="mt-4 space-y-3">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="border p-4 rounded-lg bg-gray-100 flex justify-between items-center shadow-sm hover:bg-gray-200 transition"
                >
                  <span className="font-medium">{task.title}</span>
                  <span className="text-sm text-gray-500">{new Date(task.deadline).toLocaleDateString()}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Profile Section */}
          <section className="bg-white p-6 shadow-xl rounded-xl flex flex-col items-center">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-3xl font-semibold rounded-full flex items-center justify-center shadow-md">
              {student.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <h2 className="mt-3 font-semibold text-lg text-gray-800">{student.name}</h2>
            <p className="text-sm text-gray-600">{student.className} Student</p>
            <p className="text-sm text-gray-600 mt-1">Rank: <span className="font-medium">{student.rank}</span></p>
          </section>

          {/* Performance Analysis */}
          <section className="bg-white p-6 shadow-xl rounded-xl col-span-3 text-center">
            <h2 className="text-xl font-semibold text-gray-800">{student.className}</h2>
            <p className="mt-2 text-gray-700">
              <span className="font-medium">{student.completedTasks}</span> / {student.totalTasks} tasks completed
            </p>
            <p className="mt-2 text-gray-700">Rank: <span className="font-medium">{student.rank}</span></p>
            <p className="mt-2 text-lg font-semibold text-indigo-700">{student.level}</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;



// "use client";

// export default function StudentDashboard() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
//       {/* Navbar */}
//       <nav className="w-full bg-gray-900 py-4 px-10 flex justify-between items-center fixed top-0 left-0 right-0 shadow-md z-50">
//         <h1 className="text-white text-xl font-bold">SAPT</h1>
//         <a href="/" className="text-white hover:underline">Home</a>
//       </nav>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-20">
//         {/* Soft Skills Test Card */}
//         <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-purple-300">
//           <h2 className="text-2xl font-semibold mb-4 text-purple-700">Soft Skills Test</h2>
//           <button
//             onClick={() => router.push("/soft-skills-test")}
//             className="bg-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-purple-800 transition-all font-medium"
//           >
//             Attempt Test
//           </button>
//         </div>

//         {/* Coding Test Card */}
//         <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-blue-300">
//           <h2 className="text-2xl font-semibold mb-4 text-blue-700">Coding Test</h2>
//           <button
//             onClick={() => router.push("/coding-test")}
//             className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-800 transition-all font-medium"
//           >
//             Attempt Test
//           </button>
//         </div>

//         {/* Aptitude Test Card */}
//         <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-green-300">
//           <h2 className="text-2xl font-semibold mb-4 text-green-700">Aptitude Test</h2>
//           <button
//             onClick={() => router.push("/aptitude-test")}
//             className="bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-800 transition-all font-medium"
//           >
//             Attempt Test
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

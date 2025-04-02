"use client";

import { useState, useEffect } from "react";

const TeacherLandingPage = () => {
  // Dummy data for classrooms
  const [classrooms, setClassrooms] = useState([
    { id: 1, title: "S6 IT", students: 25 },
    { id: 2, title: "S4 IT", students: 30 },
    { id: 3, title: "S2 IT", students: 20 },
  ]);

  useEffect(() => {
    // Fetch classrooms from backend when connected
    // Example: fetch('/api/classrooms').then(res => res.json()).then(data => setClassrooms(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-500 to-purple-600 text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Your Classrooms</h1>
      <div className="w-full max-w-4xl space-y-6">
        {classrooms.map((classroom) => (
          <div
            key={classroom.id}
            className="bg-white text-black p-6 rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-transform w-full"
          >
            <h2 className="text-xl font-semibold mb-2">{classroom.title}</h2>
            <p className="text-gray-600">Students: {classroom.students}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherLandingPage;

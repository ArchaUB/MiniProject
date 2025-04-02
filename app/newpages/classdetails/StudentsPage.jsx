"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import AddStudentModal from "./AddStudentModal";

const StudentsPage = () => {
  const searchParams = useSearchParams();
  const classId = searchParams.get("classId");

  const [students, setStudents] = useState([
    "Alice Johnson",
    "Bob Williams",
    "Charlie Brown",
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent.name]);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-500 to-purple-600 text-white p-6">
      <div className="bg-white text-purple-700 rounded-lg shadow-xl p-8 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Classroom {classId}</h1>
        <p className="text-lg mb-4">Manage students in this classroom.</p>

        {/* Student List */}
        <div className="mb-6">
          {students.length > 0 ? (
            <ul className="space-y-2">
              {students.map((student, index) => (
                <li
                  key={index}
                  className="bg-gray-100 text-gray-800 py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
                >
                  {student}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No students yet.</p>
          )}
        </div>

        {/* Add Student Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white font-bold py-3 px-6 rounded-lg shadow-md"
        >
          ADD
        </button>
      </div>

      {/* Modal Component */}
      {isModalOpen && <AddStudentModal onClose={() => setIsModalOpen(false)} onSave={handleAddStudent} />}
    </div>
  );
};

export default StudentsPage;

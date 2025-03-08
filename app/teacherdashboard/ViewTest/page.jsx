"use client";

import { useState } from "react";

const StudentTestPage = () => {
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: 2,
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correct: 1,
    },
    {
      id: 3,
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correct: 1,
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const completedQuestions = Object.keys(selectedAnswers).length;

  const handleSelect = (questionId, optionIndex) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  return (
    <div className="min-h-screen flex flex-row bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white shadow-md p-6 h-screen">
        <h2 className="text-lg font-semibold text-gray-800">Progress</h2>
        <p className="mt-2 text-gray-600">Completed: {completedQuestions} / {questions.length}</p>
      </aside>

      {/* Test Section */}
      <main className="flex-grow p-8 overflow-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Test Questions</h1>
        <div className="space-y-6">
          {questions.map((q) => (
            <div key={q.id} className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800">{q.question}</h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {q.options.map((option, index) => (
                  <button
                    key={index}
                    className={`p-3 rounded-lg border ${
                      selectedAnswers[q.id] === index
                        ? "border-blue-500 bg-blue-100"
                        : "border-gray-300"
                    } hover:bg-gray-200 transition`}
                    onClick={() => handleSelect(q.id, index)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentTestPage;

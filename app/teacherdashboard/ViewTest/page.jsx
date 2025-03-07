"use client";

import { useState } from "react";

const StudentTestPage = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      selected: null,
    },
    {
      id: 2,
      text: "Which is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      selected: null,
    },
    {
      id: 3,
      text: "Who wrote 'Hamlet'?",
      options: ["Shakespeare", "Hemingway", "Tolkien", "Austen"],
      selected: null,
    },
  ]);

  const handleOptionSelect = (questionId, optionIndex) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId ? { ...q, selected: optionIndex } : q
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 via-blue-300 to-green-300 flex">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white p-6 shadow-lg border-r border-gray-300 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">Progress</h2>
        <p className="text-center text-gray-600 font-medium">
          {questions.filter((q) => q.selected !== null).length} / {questions.length} completed
        </p>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 overflow-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6 bg-gradient-to-r from-yellow-400 to-red-500 inline-block text-transparent bg-clip-text">Test Questions</h1>
        <div className="space-y-6">
          {questions.map((q) => (
            <div key={q.id} className="bg-white p-6 shadow-md rounded-xl border-2 border-blue-400">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{q.text}</h2>
              <div className="space-y-3">
                {q.options.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-blue-100 transition duration-300"
                  >
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      checked={q.selected === index}
                      onChange={() => handleOptionSelect(q.id, index)}
                      className="hidden"
                    />
                    <div
                      className={`w-5 h-5 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        q.selected === index ? "bg-red-500 border-red-500" : "border-gray-400"
                      }`}
                    >
                      {q.selected === index && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                    </div>
                    <span className="text-gray-800 font-medium">{option}</span>
                  </label>
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

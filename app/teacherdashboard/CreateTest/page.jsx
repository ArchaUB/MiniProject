"use client";
import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

const CreateTest = () => {
  const [questions, setQuestions] = useState([
    { id: 1, type: "MCQ", title: "", options: [{ id: 1, text: "Option 1" }, { id: 2, text: "Option 2" }] },
  ]);

  const handleAddQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      type: "MCQ",
      title: "",
      options: [{ id: 1, text: "Option 1" }, { id: 2, text: "Option 2" }],
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleChangeQuestionType = (id, type) => {
    setQuestions(questions.map(q => q.id === id ? { ...q, type, options: type === "Short Answer" ? [] : q.options } : q));
  };

  const handleAddOption = (questionId) => {
    setQuestions(questions.map(q =>
      q.id === questionId
        ? { ...q, options: [...q.options, { id: q.options.length + 1, text: `Option ${q.options.length + 1}` }] }
        : q
    ));
  };

  const handleRemoveOption = (questionId, optionId) => {
    setQuestions(questions.map(q =>
      q.id === questionId
        ? { ...q, options: q.options.filter(opt => opt.id !== optionId) }
        : q
    ));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white py-6">
      <nav className="w-full bg-gradient-to-r from-yellow-500 to-purple-600 text-white py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 shadow-lg z-50">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold tracking-wide">
            <a href="/" className="hover:text-purple-700 transition duration-100">SAPT</a>
          </h1>
        </div>
      </nav>

      <div className="mt-20 w-full flex flex-col items-center">
        {questions.map((q) => (
          <div key={q.id} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl mb-6">
            <h2 className="text-xl font-bold text-center mb-4">Question {q.id}</h2>

            <label className="block font-medium">Select Question Type</label>
            <select
              value={q.type}
              onChange={(e) => handleChangeQuestionType(q.id, e.target.value)}
              className="w-full p-2 border rounded mt-1 mb-4"
            >
              <option value="MCQ">MCQ</option>
              <option value="MSQ">MSQ</option>
              <option value="Short Answer">Short Answer</option>
            </select>

            <input
              type="text"
              placeholder="Enter question title"
              value={q.title}
              onChange={(e) => setQuestions(questions.map(question =>
                question.id === q.id ? { ...question, title: e.target.value } : question
              ))}
              className="w-full p-2 border rounded mb-3"
            />

            {(q.type === "MCQ" || q.type === "MSQ") && (
              <>
                {q.options.map((option) => (
                  <div key={option.id} className="flex items-center mb-2">
                    <input type={q.type === "MCQ" ? "radio" : "checkbox"} className="mr-2" />
                    <input
                      type="text"
                      value={option.text}
                      onChange={(e) => {
                        setQuestions(questions.map(question =>
                          question.id === q.id
                            ? {
                                ...question,
                                options: question.options.map(opt =>
                                  opt.id === option.id ? { ...opt, text: e.target.value } : opt
                                ),
                              }
                            : question
                        ));
                      }}
                      className="w-full p-2 border rounded"
                    />
                    <button onClick={() => handleRemoveOption(q.id, option.id)} className="ml-2 text-red-500">
                      <FaTrash />
                    </button>
                  </div>
                ))}

                <button onClick={() => handleAddOption(q.id)} className="flex items-center justify-center w-full bg-black text-white p-2 rounded my-3">
                  <FaPlus className="mr-2" /> Add Option
                </button>
              </>
            )}

            {q.type === "Short Answer" && (
              <input
                type="text"
                placeholder="Enter short answer"
                className="w-full p-2 border rounded mb-3"
              />
            )}
          </div>
        ))}

        {/* Full-width Add Question & Submit Buttons */}
        <div className="flex flex-col w-full max-w-6xl gap-4">
          <button onClick={handleAddQuestion} className="flex items-center justify-center bg-green-600 text-white px-4 py-3 rounded w-full">
            <FaPlus className="mr-2" /> Add Question
          </button>
          {questions.length > 0 && (
            <button className="bg-blue-600 text-white px-6 py-3 rounded w-full">
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateTest;

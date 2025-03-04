"use client";
import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <motion.div
      className="flex flex-col items-center min-h-screen bg-yellow-100 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {questions.map((q, index) => (
        <div key={q.id} className="bg-white p-6 rounded-lg shadow-lg w-[400px] mb-6">
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
            <motion.input
              key={`short-${q.id}`}
              type="text"
              placeholder="Enter short answer"
              className="w-full p-2 border rounded mb-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
      ))}

      {/* Add Questions & Submit Buttons */}
      <div className="flex justify-between w-[400px]">
        <button onClick={handleAddQuestion} className="flex items-center bg-green-600 text-white px-4 py-2 rounded">
          <FaPlus className="mr-2" /> Add Questions
        </button>
        {questions.length > 0 && (
          <button className="bg-blue-600 text-white px-6 py-2 rounded">
            Submit
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default CreateTest;

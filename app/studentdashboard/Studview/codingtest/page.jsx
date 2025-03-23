"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

export default function CodingTestPage() {
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("python");
    const [darkMode, setDarkMode] = useState(false);

    const runCode = () => {
        setOutput("Running...");
        setTimeout(() => setOutput("Execution successful!"), 1000);
    };

    const submitCode = () => {
        setOutput("Submitting...");
        setTimeout(() => setOutput("Submission successful!"), 1000);
    };

    return (
        <div className={`flex flex-col h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
            {/* Navbar */}
            <nav className="p-4 flex justify-between items-center bg-gray-400 dark:bg-gray-900 border-b">
                <h1 className="text-lg font-bold dark:text-white">Coding Test</h1>
                <div className="flex gap-4">
                    <LanguageSelect onSelect={setSelectedLanguage} />
                    <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
            </nav>

            {/* Main Layout */}
            <div className="flex flex-1 overflow-hidden">
                {/* Left Panel */}
                <div className="flex-1 p-4 border-r overflow-auto">
                <h2 className="text-2xl font-bold mb-4">Merge Strings Alternately</h2>
    <p className="mb-2">You are given two strings word1 and word2...</p>
    <h3 className="text-xl font-semibold mb-2">Example:</h3>
    <pre className="p-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded">
        Input: word1 = "abc", word2 = "pqr" Output: "apbqcr"
    </pre>
    <pre className="p-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded">
        Input: word1 = "ab", word2 = "pqrs" Output: "apbqrs"
    </pre>
                    <h3 className="text-xl font-semibold mb-2">Constraints:</h3>
                    <ul className="list-disc pl-5">
                        <li>1 ≤ word1.length, word2.length ≤ 100</li>
                        <li>word1 and word2 consist of lowercase English letters.</li>
                    </ul>
                </div>

                {/* Right Panel */}
                <div className="flex-1 p-4 overflow-auto">
                    <Tabs defaultValue="code">
                        <TabsList className="flex gap-2 mb-4">
                            <TabsTrigger value="code">Code</TabsTrigger>
                            <TabsTrigger value="output">Output</TabsTrigger>
                        </TabsList>
                        <TabsContent value="code">
                        <Textarea
    placeholder="Write your code here..."
    value={code}
    onChange={(e) => setCode(e.target.value)}
    className="w-full h-64 p-2 border rounded resize bg-white text-black 
               dark:bg-gray-900 dark:text-white 
               placeholder-gray-500 dark:placeholder-gray-300"
/>

    <div className="mt-2 flex gap-2">
        <Button onClick={runCode} className="bg-blue-500">Run</Button>
        <Button onClick={submitCode} className="bg-green-500">Submit</Button>
    </div>
</TabsContent>

                        <TabsContent value="output">
                            <pre className="p-2 bg-gray-200 dark:bg-gray-800 rounded">{output}</pre>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

function LanguageSelect({ onSelect }) {
    return (
        <select
            onChange={(e) => onSelect(e.target.value)}
            className="p-2 border rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
        >
            <option value="python">Python</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
        </select>
    );
}

function ThemeToggle({ darkMode, setDarkMode }) {
    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 border rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
        >
            {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
    );
}

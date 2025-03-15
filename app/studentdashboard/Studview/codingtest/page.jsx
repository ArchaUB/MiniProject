"use client";

import { useState } from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function CodingTestPage() {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');

    const runCode = () => {
        setOutput('Running...');
        // Simulate code execution (integration with backend needed)
        setTimeout(() => setOutput('Execution successful!'), 1000);
    };

    const submitCode = () => {
        setOutput('Submitting...');
        // Simulate code submission (integration with backend needed)
        setTimeout(() => setOutput('Submission successful!'), 1000);
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 p-4 bg-gray-100 border-r">
                <h2 className="text-2xl font-bold mb-4">Merge Strings Alternately</h2>
                <p className="mb-2">You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.</p>
                <h3 className="text-xl font-semibold mb-2">Example:</h3>
                <pre className="bg-white p-2 rounded mb-2">Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"</pre>
                <pre className="bg-white p-2 rounded mb-2">Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"</pre>
                <h3 className="text-xl font-semibold mb-2">Constraints:</h3>
                <ul className="list-disc pl-5">
                    <li>1 ≤ word1.length, word2.length ≤ 100</li>
                    <li>word1 and word2 consist of lowercase English letters.</li>
                </ul>
            </div>

            <div className="w-1/2 p-4 bg-gray-50">
                <Tabs defaultValue="code">
                    <TabsList>
                        <TabsTrigger value="code">Code</TabsTrigger>
                        <TabsTrigger value="output">Output</TabsTrigger>
                    </TabsList>
                    <TabsContent value="code" className="mt-4">
                        <Textarea
                            placeholder="Write your code here..."
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="w-full h-64 p-2 border rounded"
                        />
                        <div className="mt-2 flex gap-2">
                            <Button onClick={runCode} className="bg-blue-500">Run</Button>
                            <Button onClick={submitCode} className="bg-green-500">Submit</Button>
                        </div>
                    </TabsContent>
                    <TabsContent value="output" className="mt-4">
                        <pre className="p-2 bg-gray-200 rounded">{output}</pre>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}

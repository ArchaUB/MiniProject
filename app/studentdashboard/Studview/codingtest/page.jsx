"use client";

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, Tab } from '@/components/ui/tabs';

export default function CodingTestPage() {
    const [activeTab, setActiveTab] = useState('description');
    const [code, setCode] = useState('');

    return (
        <div className="flex h-screen">
            {/* Left Panel: Problem Description */}
            <div className="w-1/2 h-full p-4 overflow-auto border-r">
                <Card className="mb-4">
                    <CardContent>
                        <h1 className="text-2xl font-semibold">1768. Merge Strings Alternately</h1>
                        <p className="mt-2">You are given two strings <code>word1</code> and <code>word2</code>. Merge the strings by adding letters in alternating order, starting with <code>word1</code>. If a string is longer than the other, append the additional letters at the end.</p>
                        <p className="mt-2">Return the merged string.</p>
                        <h2 className="text-xl font-semibold mt-4">Example 1:</h2>
                        <pre className="bg-gray-100 p-2 rounded">Input: word1 = "abc", word2 = "pqr"<br />Output: "apbqcr"</pre>
                        <h2 className="text-xl font-semibold mt-4">Example 2:</h2>
                        <pre className="bg-gray-100 p-2 rounded">Input: word1 = "ab", word2 = "pqrs"<br />Output: "apbqrs"</pre>
                        <h2 className="text-xl font-semibold mt-4">Example 3:</h2>
                        <pre className="bg-gray-100 p-2 rounded">Input: word1 = "abcd", word2 = "pq"<br />Output: "apbqcd"</pre>
                    </CardContent>
                </Card>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-2">
                    <Tab value="description">Description</Tab>
                    <Tab value="editorial">Editorial</Tab>
                    <Tab value="solutions">Solutions</Tab>
                    <Tab value="submissions">Submissions</Tab>
                    <Tab value="hints">Hints</Tab>
                    <Tab value="discussion">Discussion</Tab>
                    <Tab value="topics">Topics</Tab>
                </Tabs>
            </div>

            {/* Right Panel: Code Editor */}
            <div className="w-1/2 h-full p-4">
                <Card className="h-full">
                    <CardContent>
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl font-semibold">Code</h2>
                            <Button className="bg-green-500 text-white">Run</Button>
                            <Button className="bg-blue-500 text-white">Submit</Button>
                        </div>
                        <textarea
                            className="w-full h-80 p-2 mt-2 bg-gray-100 rounded"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="Write your code here..."
                        />
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Test Cases</h3>
                            <pre className="bg-gray-100 p-2 rounded">Input: word1 = "abc", word2 = "pqr"<br />Expected Output: "apbqcr"</pre>
                            <pre className="bg-gray-100 p-2 rounded">Input: word1 = "ab", word2 = "pqrs"<br />Expected Output: "apbqrs"</pre>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Console Output</h3>
                            <div className="bg-black text-white p-2 rounded h-32 overflow-auto">Console logs will appear here...</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

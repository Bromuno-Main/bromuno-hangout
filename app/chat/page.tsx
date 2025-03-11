"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { createQuestion } from "../../redux/questionSlice";


export default function Page() {
    const dispatch = useDispatch<AppDispatch>();
    const { questions, loading, error } = useSelector((state: RootState) => state.question);

    const [question, setQuestion] = useState("");
    const [tags, setTags] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!question.trim() || !tags.trim()) return;

        dispatch(createQuestion({ question, tags: tags.split(",").map(tag => tag.trim()) }));

        // Clear form after submission
        setQuestion("");
        setTags("");
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-4 border text-black rounded-lg shadow-lg">
            <h1 className="text-xl font-bold mb-4">Create a Question</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Enter your question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Enter tags (comma separated)"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Create Question"}
                </button>
            </form>

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <div className="mt-6">
                <h2 className="text-lg font-semibold">Created Questions</h2>
                <ul className="mt-2 space-y-2">
                    {questions.map((q) => (
                        <li key={q.id} className="p-2 border rounded shadow-sm">
                            <p className="font-semibold">{q.question}</p>
                            <p className="text-sm text-gray-500">Tags: {q.tags.join(", ")}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

"use client";

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {createQuestion, fetchQuestions, upvote} from "../../redux/questionSlice";
import Link from "next/link";


export default function Page() {
    const dispatch = useDispatch<AppDispatch>();
    const {questions, loading, error} = useSelector((state: RootState) => state.question);
    useEffect(() => {
        dispatch(fetchQuestions())
        return () => {
            // Cleanup if needed
        }
    }, [dispatch]);

    const [question, setQuestion] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!question.trim() || !tags.trim()) return;

        dispatch(createQuestion({question, description, tags: tags.split(",").map(tag => tag.trim())}));

        // Clear form after submission
        setQuestion("");
        setTags("");
        setDescription("");
    };
    console.log(questions)

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
                    placeholder="Enter your Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                        <Link href={`/chat/${q._id}`} key={q._id} className="p-2 border rounded shadow-sm">
                            <p className="font-semibold">{q.question}</p>
                            <p className="font-semibold">{q.description}</p>
                            <p className="font-semibold">{q.comments.length}</p>
                            <button className={`bg-blue-800`} onClick={(e) => {
                                e.preventDefault();
                                dispatch(upvote({id: q._id}))
                            }} disabled={q.isUpVoted}>

                                <p className="font-semibold">{q?.upVotes?.length}</p>
                            </button>
                            <p className="text-sm text-gray-500">Tags: {q.tags.join(", ")}</p>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}

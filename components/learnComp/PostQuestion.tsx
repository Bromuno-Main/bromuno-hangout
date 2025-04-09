import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import React, {useState} from "react";
import {createQuestion} from "../../redux/questionSlice";

export function PostQuestion() {

    const dispatch = useDispatch<AppDispatch>();
    const {loading} = useSelector((state: RootState) => state.question);


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

    return (
        <>

            <div className="w-full flex-col flex gap-4 py-4">

                <div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* <h5 className="  "> Question</h5> */}
                        <div className="border-b w-full flex items-end ">
                            <input
                                type="text"
                                placeholder="Your question..."
                                value={question}
                                onChange={(e) => {
                                    setQuestion(e.target.value);
                                }}
                                className={`p-2 !border-b flex-1 font-bold placeholder:font-medium Focus:border-transparent w-full focus:outline-none border-gray-200 ${
                                    question.length > 60 ? "!text-red-400" : ""
                                }`}
                                required
                            />
                            <p className="text-right text-sm text-gray-500">
                                <div className="relative size-7">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg className="size-6">
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke={question.length > 60 ? "red" : "black"}
                                                strokeWidth="2"
                                                fill="none"
                                                strokeDasharray="62.8319" // Circumference of the circle (2 * π * r)
                                                strokeDashoffset={
                                                    question.length > 60
                                                        ? 0
                                                        : 62.8319 - (62.8319 * question.length) / 60
                                                }
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke={question.length > 60 ? "red" : "gray"}
                                                strokeWidth="2"
                                                fill="none"
                                                opacity={.3}
                                                strokeDasharray="62.8319" // Circumference of the circle (2 * π * r)

                                            />
                                            <text
                                                x="12"
                                                y="16"
                                                textAnchor="middle"
                                                fontSize="10"
                                                fill={question.length > 60 ? "red" : "gray"}
                                            >
                                                {60 - question.length}
                                            </text>
                                        </svg>
                                    </div>
                                </div>
                            </p>
                        </div>

                        <textarea
                            placeholder="Enter your Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border-b  font-bold placeholder:font-medium focus:outline-none   "

                        />
                        <span className="flex gap-3 items-center border-b font-bold  ">
                            Tags:
                        <input
                            type="text"
                            placeholder="Enter tags (comma separated)"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            className="w-full p-2 border font-bold placeholder:font-medium rounded Focus:broder-transparent focus:outline-none   border-gray-200 "
                            required
                        /></span>
                        <span className="flex gap-3 items-center">

                            <button
                                type="submit"
                                className={`w-full rounded-full text-black p-2 ${
                                    question.trim() && tags.trim() && question.length <= 60
                                        ? "bg-[#FFCD83] hover:bg-[#ffd493]"
                                        : "bg-gray-300 cursor-not-allowed"
                                }`}
                                disabled={!question.trim() || !tags.trim() || loading || question.length > 60}
                                title={
                                    !question.trim() || !tags.trim() || question.length > 60
                                        ? "Can't Post"
                                        : ""
                                }

                            >
                                {loading ? "Submitting..." : "Post"}
                            </button>
                            <span className="boxed bg-slate-100 !pl-3 !pr-4  rounded-md h-9 gap-2   ">
                                <img src="/spark.svg" alt="" className="size-4"/>
                                 3</span>
                        </span>
                    </form>
                </div>
            </div>
        </>
    );
}

"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Button } from "../ui/Button"
import { Answer } from "./Answer"
import { BiSolidCommentDots, BiSolidUpvote } from "react-icons/bi"
import { UnlimitedBanner } from "./go-ulimited"
import { ConnectMentor } from "./connect-mentor"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { createQuestion, fetchQuestions, upvote } from "../../redux/questionSlice";
import moment from "moment";

export function Discover() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="flex justify-start items-start h-full relative">
            <div className="w-full">
                <div className="flex-1 lg:h-[78px] flex justify-between items-start lg:pt-2">
                    <div className="h-full lg:w-[430px] flex items-end justify-start lg:pl-3 lg:pb-[7px]">
                        <p className="lg:w-[340px] lg:h-[20px] font-semibold text-[16px] text-[#A0A0A0] leading-[20px]">
                            Ask Questions, Get Expert Answers
                        </p>
                    </div>
                    <Button onClick={toggleModal}>Open Modal</Button>
                </div>
                <div
                    className="flex text-black justify-start items-center gap-4 [&>p]:p-2 [&>p]:text-sm [&>p]:font-medium">
                    <p>Crypto</p> <p>Web Design</p> <p>Coding</p> <p>Business</p>
                </div>
                <div className="lg:w-[582px] lg:h-[1168px] text-black">
                    <div>
                        {/* Other content */}
                    </div>
                </div>
            </div>
            <div
                className="lg:w-1/2 max-w-screen-sm md:pl-[2rem] pb-10 justify-end min-w-[340px] min-h-[80vh] sticky right-3 top-[4vh] flex flex-col gap-4">
                <ConnectMentor />
                <UnlimitedBanner />
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg">
                        <button
                            onClick={toggleModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            Close
                        </button>
                        <Post />
                    </div>
                </div>
            )}
        </div>
    );
}

export function Post() {
    const [showAnswer, setShowAnswer] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const { questions, loading, error } = useSelector((state: RootState) => state.question);
    const [id, setid] = useState<string | null>("");

    useEffect(() => {
        dispatch(fetchQuestions());
        return () => {};
    }, []);

    const [question, setQuestion] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!question.trim() || !tags.trim()) return;

        dispatch(createQuestion({ question, description, tags: tags.split(",").map(tag => tag.trim()) }));

        // Clear form after submission
        setQuestion("");
        setTags("");
        setDescription("");
    };

    return (
        <>
            {showAnswer && <Answer id={id} answer={showAnswer} setAnswer={setShowAnswer} />}
            <div className="w-full flex-col flex gap-4 py-4">
                {questions.map((items, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => {
                                setShowAnswer(!showAnswer);
                                setid(items?._id);
                            }}
                            className="bg-white flex flex-col cursor-pointer justify-start hover:shadow-md duration-400 shadow-[#f3f3f3] items-start w-full rounded-3xl p-5"
                        >
                            <div className="flex text-black text-sm items-center justify-between w-full">
                                <div className="flex justify-center items-center gap-2">
                                    <Image
                                        src={`/profile.svg`}
                                        alt="icon"
                                        width={15}
                                        height={15}
                                        className="bg-gray-200 size-6 rounded-full"
                                    />
                                    <p className="text-sm">{items.user.fullName}</p>
                                    <p className="text-sm">
                                        {moment(items.createdAt, "YYYYMMDD").fromNow()}
                                    </p>
                                </div>
                                <div className="flex gap-[-20px] hover:gap-1 duration-300">
                                    {items.tags.map((item, index) => {
                                        return (
                                            <Button key={index} variant={"dsn"} size={"sm"}>
                                                {item}
                                            </Button>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start mt-3 gap-2 text-black text-sm">
                                <p className="text-md mb-[.2rem] font-bold">{items.question}</p>
                                <p className="text-sm mb-[1rem] w-full line-clamp-2">{items.description}</p>
                            </div>
                            <div className="flex gap-2 items-center justify-center">
                                <Button variant={"ghost"} size={"lg"}>
                                    <BiSolidCommentDots size={20} />
                                    {items.comments.length}
                                </Button>
                                <Button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(upvote({ id: items._id }));
                                    }}
                                    disabled={items.isUpVoted}
                                    variant={"ghost"}
                                    size={"lg"}
                                >
                                    <BiSolidUpvote size={20} />
                                    {items?.upVotes?.length}
                                </Button>
                            </div>
                        </div>
                    );
                })}
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
                                                {60 - question.length }
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
                                <img src="/spark.svg" alt="" className="size-4" />
                                 3</span>
                        </span>
                    </form>
                </div>
            </div>
        </>
    );
}

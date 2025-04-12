"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { Answer } from "./Answer";
import { UnlimitedBanner } from "./go-ulimited";
import { ConnectMentor } from "./connect-mentor";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchQuestions } from "../../redux/questionSlice";
import { PostQuestion } from "./PostQuestion";
import QuestionList from "./QuestionList";
import {useRouter, useSearchParams} from "next/navigation";
import TagsList from "./TagsList";
import { IoMdClose } from "react-icons/io";

export function Discover() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [id, setId] = useState<string | null>(null);
    const [tag, setTag] = useState<string>("All");

    const dispatch = useDispatch<AppDispatch>();
    const searchParams = useSearchParams();
    const router = useRouter();

    // Handle modal toggle
    const toggleModal = useCallback(() => {
        setIsModalOpen((prev) => !prev);
    }, []);

    // Close modal on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isModalOpen) {
                setIsModalOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isModalOpen]);

    // Check URL for ?answer query
    useEffect(() => {
        const answerParam = searchParams.get("answer");
        if (answerParam) {
            setShowAnswer(true);
            setId(answerParam);
        }
        console.log(searchParams);
    }, [searchParams]);

    // Fetch questions on mount
    useEffect(() => {
        dispatch(fetchQuestions());
    }, [dispatch]);

    useEffect(() => {
        if (id) {
            router.push(`/discover?answer=${id}`)
        }
    }, [id]);

    return (
        <>
            {showAnswer && id && (
                <Answer id={id} answer={showAnswer} setAnswer={setShowAnswer} />
            )}

            <div className="flex justify-start items-start h-full relative">
                <div className="w-full">
                    <div className="flex-1flex justify-between border-b  pb-2 mb-3 items-start lg:pt-2">

                        <div onClick={toggleModal}>  Ask Questions, Get Expert Answers
                        </div>
                    </div>

                    {/* Hardcoded categories, can be dynamic */}
                    <div
                        className="flex text-black justify-start items-center gap-4 [&>p]:p-2 [&>p]:text-sm [&>p]:font-medium">
                        <TagsList tag={tag} setTag={setTag}/>
                    </div>

                    {(
                        <QuestionList
                            id={id}
                            tag={tag}
                            setId={setId}
                            setShowAnswer={setShowAnswer}
                            showAnswer={showAnswer}
                        />
                    )}
                </div>

                <div
                    className="lg:w-1/2 max-w-screen-sm md:pl-[2rem] pb-10 justify-end min-w-[340px] min-h-[80vh] sticky right-3 top-[4vh] flex flex-col gap-4">
                    <ConnectMentor />
                    <UnlimitedBanner />
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg relative">
                            <button
                                onClick={toggleModal}
                                className="absolute top-4 right-4 rounded-full !size-10 flex items-center justify-center  text-gray-500 hover:text-gray-700"
                            >
                                <IoMdClose />
                            </button>
                            <PostQuestion />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

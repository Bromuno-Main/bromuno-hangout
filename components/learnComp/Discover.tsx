"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Answer } from "./Answer";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchQuestions } from "../../redux/questionSlice";
import { PostQuestion } from "./PostQuestion";
import QuestionList from "./QuestionList";
import { useRouter, useSearchParams } from "next/navigation";
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
      router.push(`/discover?answer=${id}`);
    }
  }, [id]);

  return (
    <>
      {showAnswer && id && (
        <Answer id={id} answer={showAnswer} setAnswer={setShowAnswer} />
      )}

      <div className="flex  flex-col justify-center items-start h-full relative">
        <div className="w-full flex flex-col gap-6  items-center ">
        

          {/* Hardcoded categories, can be dynamic */}
          <div className="flex justify-between items-center rounded-lg  px-4 w-full flex-1  top-6 gap-4">
            <TagsList tag={tag} setTag={setTag} />  
            <div onClick={toggleModal} className="flex justify-center  bg-white rounded-lg px-4 font-bold uppercase border  items-center cursor-pointer py-2 ">
            <div> new Post</div>
          </div>
          </div>

          {
            <QuestionList
              id={id}
              tag={tag}
              setId={setId}
              setShowAnswer={setShowAnswer}
              showAnswer={showAnswer}
            />
          }
        </div>

        {/* <div className="lg:w-1/2 w-full   lg:max-w-screen-sm lg:pl-[2rem] lg:pb-10 justify-end lg:min-w-[340px] lg:min-h-[80vh] lg:sticky hidden right-3 top-[4vh] lg:flex flex-col gap-4">
          <ConnectMentor />
          <UnlimitedBanner className="lg:block hidden" />
        </div> */}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg relative">
              <div className="flex justfify-between font-bold  ">
                New Question
                <div
                  onClick={toggleModal}
                  className="absolute top-4 right-4 rounded-full flex size-8 hover:grey-200 items-center justify-center cursor-pointer "
                >
                  <IoMdClose />
                </div>
              </div>
              <PostQuestion />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

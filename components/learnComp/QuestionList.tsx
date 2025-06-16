import React, { useEffect, useState } from "react";
import Image from "next/image";
import moment from "moment/moment";
import { Button } from "../ui/Button";
import { BiSolidCommentDots, BiSolidUpvote } from "react-icons/bi";
import { fetchQuestions, upvote } from "../../redux/questionSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import LoadingHandler from "../LoadingHandler";

interface QuestionListProp {
  id: string | null;
  tag: string | null;
  setId: (id: string) => void;
  showAnswer: boolean;
  setShowAnswer: (showAnswer: boolean) => void;
}

export default function QuestionList({
  tag,
  setShowAnswer,
  setId,
}: QuestionListProp) {
  const { questions, fetching, error } = useSelector(
    (state: RootState) => state.question
  );
  const dispatch = useDispatch<AppDispatch>();
  const [currentQuestions, setCurrentQuestions] = useState(questions);

  useEffect(() => {
    dispatch(fetchQuestions());
    return () => {};
  }, []);

  useEffect(() => {
    if (tag === "All") {
      setCurrentQuestions(questions);
    } else {
      const filtered = questions.filter((q) => q.tags.includes(tag || ""));
      setCurrentQuestions(filtered);
    }
  }, [tag, questions]);
  return (
    <div className="lg:w-[582px] lg:h-[1168px] mb-12 flex flex-col text-black">
      <LoadingHandler
        loading={fetching}
        loadingComponent={<p>Loading questions...</p>}
        errorComponent={
          <p style={{ color: "red" }}>{error || "Error fetching questions."}</p>
        }
        idleComponent={<p>Nothing to load yet.</p>}
        successComponent={
          <div className={`w-full gap-3 h-full flex flex-col mb-14`}>
            {[...currentQuestions]
              .sort(
                (a, b) =>
                  moment(b.createdAt).valueOf() - moment(a.createdAt).valueOf()
              )
              .map((items, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      // console.log(items?._id);
                      setShowAnswer(true);
                      setId(items?._id);
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
                          {moment(items.createdAt).fromNow()}
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
                      {items.image && (
                        <Image
                          className={`w-full h-[300px]`}
                          src={items.image}
                          alt="Question image"
                          width={800}
                          height={300}
                        />
                      )}
                      <p className="text-md mb-[.2rem] font-bold">
                        {items.question}
                      </p>
                      <p className="text-sm mb-[1rem] w-full line-clamp-2">
                        {items.description}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                      <Button variant={"ghost"} size={"lg"}>
                        <BiSolidCommentDots size={20} />
                        {items.comments.length}
                      </Button>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
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
          </div>
        }
      />
      <div className={`my-12`} />
    </div>
  );
}

import {BiSolidCommentDots, BiSolidUpvote} from "react-icons/bi";
import {X} from "lucide-react";

import React, {SetStateAction, useEffect, useState} from "react"
import Image from "next/image"
import {useRouter, useSearchParams} from "next/navigation"
import {Button} from "../ui/Button"
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {
    createQuestionComment,
    createQuestionCommentReply,
    fetchSingleQuestion,
    upvoteComment
} from "../../redux/questionSlice";
import moment from "moment/moment";
import LoadingHandler from "../LoadingHandler";

interface ReplyState {
    [key: string]: string;
}

interface propType {
    answer: boolean,
    setAnswer: React.Dispatch<SetStateAction<boolean>>
    id: string | null;
}


export function Answer({answer, setAnswer, id}: propType) {
    const dispatch = useDispatch<AppDispatch>();
    const {question, fetchingDetails, error} = useSelector((state: RootState) => state.question);
    const router = useRouter();
    const searchParams = useSearchParams();


// Normalize id
    const [normalisedId, setNormalisedId] = useState<string>(Array.isArray(id) ? id[0] : id);

    // Separate states for comment and reply inputs
    const [commentText, setCommentText] = useState("");
    const [replyTexts, setReplyTexts] = useState<ReplyState>({});
    const [openComment, setOpenComment] = useState<string | null>(null);

    useEffect(() => {
        if (searchParams.get("answer")) {
            setNormalisedId(searchParams.get("answer") ?? "")
        }


    }, [searchParams]);


    useEffect(() => {
        if (normalisedId && answer) {
            dispatch(fetchSingleQuestion({id: normalisedId}));

            router.push(`/discover?answer=${normalisedId}`)
        }
        return () => {
            router.push(`/discover`)
        }
    }, [normalisedId, dispatch, answer]);

    const handleCommentSubmit = () => {
        dispatch(createQuestionComment({text: commentText, id: normalisedId}));
        setCommentText(""); // Clear input after submitting
    };

    const handleReplySubmit = (commentId: string) => {
        dispatch(createQuestionCommentReply({
            text: replyTexts[commentId],
            questionId: normalisedId,
            replyId: commentId
        }));
        setReplyTexts((prev) => ({...prev, [commentId]: ""})); // Clear input after submitting
    };

    const handleReplyChange = (commentId: string, text: string) => {
        setReplyTexts((prev) => ({...prev, [commentId]: text}));
    };

    return (
        <div
            className={`fixed z-20   left-[16%] top-[7vh] rounded-lg  flex flex-col bg-white shadow-lg lg:h-[85vh] lg:w-[661px] overflow-hidden my-auto   overflow-y-scroll scrollbar-hide`}>
            <LoadingHandler
                loading={fetchingDetails}
                loadingComponent={<p>Loading questions...</p>}
                errorComponent={<p style={{color: 'red'}}>{error || 'Error fetching questions.'}</p>}
                idleComponent={<p>Nothing to load yet.</p>}
                successComponent={
                    <div>
                        {(question && question[normalisedId]) && <div
                            className="">
                            <div
                                className="flex items-center border-gray-300 pl-5 border-b-1 sticky top-0 z-30 bg-white   justify-between">
                                <div className="flex items-center gap-2">
                                    <Image src={`/profile.svg`} alt='😊' width={10} height={10}
                                           className='bg-gray-200 size-6 flex items-center justify-center rounded-full '/>
                                    <p className="text-sm">{question![normalisedId]?.user?.email}</p>
                                    <p className="text-sm text-gray-500">
                                        {moment(question![normalisedId].createdAt, "YYYYMMDD").fromNow()}
                                    </p>

                                </div>
                                <div className="flex gap-6 p-3 items-center justify-center">
                                    <div>
                                        <Image src={"/uploadIcon.svg"} width={16} height={20} alt="upload"/>
                                    </div>
                                    {/* close icon */}
                                    <div onClick={() => {
                                        setAnswer(false);
                                    }}
                                         className="rounded-full bg-stone-100/80 cursor-pointer p-2 [&>img]:opacity-70 [&>img]:size-[16px]"
                                    >
                                        <X size={20}/>
                                    </div>
                                </div>
                            </div>
                            <div className="border-stone-300 border-b-1 py-6 ">


                                <div className="px-5 flex flex-col  gap-3">
                                    <p className="font-semibold">{question![normalisedId]?.question}</p>
                                    <p className="text-sm ">{question![normalisedId]?.description}</p>
                                    <div>
                                        {
                                            question![normalisedId].tags.map((tag, index) => (
                                                <Button key={index} variant={"dsn"} size={"sm"}>{tag}</Button>

                                            ))
                                        }
                                    </div>
                                    <div className="flex gap-2 items-center justify-start">
                                        <Button variant={"ghost"} size={"lg"}>
                                            <BiSolidUpvote size={20}/>
                                            {question![normalisedId].upVotes.length}
                                        </Button>
                                        <p className="text-sm group-focus">Leave an upvote if you found this helpful</p>

                                    </div>
                                    {/* input----- */}
                                    <div className="h-full w-full flex flex-col relative">
                                        <input
                                            value={commentText}
                                            onChange={(e) => setCommentText(e.target.value)}
                                            type="text"
                                            className="border p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                        />
                                        <p className="text-gray-500 text-sm">Leave a comment</p>

                                        {/* Parent with focus-within */}
                                        <div
                                            className="relative bg-pink-600 focus-within:opacity-100 focus-within:translate-y-0 opacity-0 translate-y-2 transition-all duration-300">
                                            <button
                                                onClick={handleCommentSubmit}
                                                className="bg-pink-600 text-white px-4 py-2 rounded-md"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>


                                </div>
                                <div className="border-t-1 p-4 flex flex-col gap-4">
                                    <h4 className="text-sm">Answers {question![normalisedId].comments.length}</h4>
                                    {
                                        question![normalisedId].comments.map((post, index) => {
                                            return (
                                                <div key={index}
                                                     className={`${index === 0 ? "border border-[#6AC5AE]" : "border"} w-full flex flex-col gap-2 rounded-[24px] p-4`}>
                                                    <div className="flex justify-between items-center  ">
                                                        <div className="flex items-center gap-2">
                                                            <Image src={`/profile.svg`} alt='😊' width={30} height={30}
                                                                   className='bg-gray-200 size-7 flex items-center justify-center rounded-full '/>
                                                            <p className="text-sm">username</p>
                                                            <p className="text-sm">Data scientist</p>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <p className="text-sm date">
                                                                {moment(post.createdAt, "YYYYMMDD").fromNow()}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm">{post.text}</p>

                                                    <div className="flex justify-between items-center py-2 ">

                                                        <div className="flex gap-2 items-center justify-center">
                                                            <Button onClick={() => {
                                                                setOpenComment(post._id);
                                                            }} variant={"ghost"} size={"lg"}>
                                                                <BiSolidCommentDots size={20}/>
                                                                {post.replies.length}
                                                            </Button>
                                                            <Button onClick={() => {
                                                                dispatch(upvoteComment({
                                                                    id: normalisedId,
                                                                    commentId: post._id
                                                                }))
                                                            }} variant={"ghost"} size={"lg"}>
                                                                <BiSolidUpvote size={20}/>
                                                                {post.upVotes.length}
                                                            </Button>
                                                            <Button variant={"ghost"} size={"lg"}>Gift</Button>

                                                        </div>
                                                        <div>
                                                            <Button variant={"ghost"} size={"lg"} className="w-fit">Open
                                                                chat</Button>
                                                        </div>
                                                    </div>
                                                    {
                                                        openComment === post._id && <div>
                                                            <div className="reply-input flex justify-between mb-2">
                                                                <input
                                                                    type="text"
                                                                    value={replyTexts[post._id] || ""}
                                                                    onChange={(e) => handleReplyChange(post._id, e.target.value)}
                                                                    placeholder="Reply"
                                                                    className="w-3/4 p-2 border border-gray-300 rounded-lg"
                                                                />
                                                                <button
                                                                    onClick={() => handleReplySubmit(post._id)}
                                                                    className="w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                                                                >
                                                                    Reply
                                                                </button>
                                                            </div>
                                                        </div>
                                                    }
                                                    <div className="replies ml-4">
                                                        {post?.replies?.map((reply) => (
                                                            <div key={reply._id} className="reply mb-2">
                                                                <p className="text-gray-600">{reply?.text}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>


                            </div>
                        </div>}
                    </div>
                }
            />


        </div>
    )
}

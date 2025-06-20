"use client"
import React, {useEffect, useState} from 'react';
import {useParams} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../redux/store";
import {
    createQuestionComment,
    createQuestionCommentReply,
    fetchSingleQuestion,
    upvoteComment
} from "../../../redux/questionSlice";

interface ReplyState {
    [key: string]: string;
}

export default function Page() {
    const {id} = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const {question, loading, error} = useSelector((state: RootState) => state.question);

    // Normalize id
    const normalisedId = Array.isArray(id) ? id[0] : id;

    // Separate states for comment and reply inputs
    const [commentText, setCommentText] = useState("");
    const [replyTexts, setReplyTexts] = useState<ReplyState>({});

    useEffect(() => {
        if (normalisedId) {
            dispatch(fetchSingleQuestion({id: normalisedId}));
        }
    }, [normalisedId, dispatch]);

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
        <div className="container mx-auto p-4 text-black">
            {loading && <p className="text-lg text-gray-700">Loading...</p>}
            {error && <p className="text-lg text-red-600">{error}</p>}

            {question && question[normalisedId] ? (
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h1 className="text-3xl font-bold mb-4">{question[normalisedId].question}</h1>
                    <p className="text-lg text-gray-600 mb-4">Tags: {question[normalisedId].tags.join(", ")}</p>

                    <div className="comments-section">
                        <h4 className="text-2xl font-bold mb-4">Comments</h4>
                        {question[normalisedId].comments.map((comment) => (
                            <div key={comment._id} className="comment mb-4">
                                <p className="text-lg">{comment.text}</p>
                                <div className={`flex flex-row gap-3`}>
                                    <p className="text-lg">{comment?.replies?.length}</p>
                                    <button disabled={comment.isUpVoted} onClick={() => {
                                        dispatch(upvoteComment({id: normalisedId, commentId: comment._id}))
                                    }}>

                                        <p className="text-lg">{comment?.upVotes?.length}</p>
                                    </button>
                                </div>
                                <div className="replies ml-4">
                                    {comment?.replies?.map((reply) => (
                                        <div key={reply._id} className="reply mb-2">
                                            <p className="text-gray-600">{reply?.text}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="reply-input flex justify-between mb-2">
                                    <input
                                        type="text"
                                        value={replyTexts[comment._id] || ""}
                                        onChange={(e) => handleReplyChange(comment._id, e.target.value)}
                                        placeholder="Reply"
                                        className="w-3/4 p-2 border border-gray-300 rounded-lg"
                                    />
                                    <button
                                        onClick={() => handleReplySubmit(comment._id)}
                                        className="w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                                    >
                                        Reply
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="new-comment flex justify-between mb-4">
                        <input
                            type="text"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder="Comment"
                            className="w-3/4 p-2 border border-gray-300 rounded-lg"
                        />
                        <button
                            onClick={handleCommentSubmit}
                            className="w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                        >
                            Comment
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-lg text-gray-700">Question not found</p>
            )}
        </div>
    );
}

import { BiSolidCommentDots, BiSolidUpvote } from "react-icons/bi";
import { X } from "lucide-react";
import { BsEmojiSmile } from "react-icons/bs";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

import React, { SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  createQuestionComment,
  createQuestionCommentReply,
  fetchSingleQuestion,
  upvote,
  upvoteComment,
} from "../../redux/questionSlice";
import moment from "moment/moment";
import LoadingHandler from "../LoadingHandler";
import { IoSend } from "react-icons/io5";

interface ReplyState {
  [key: string]: string;
}

interface propType {
  answer: boolean;
  setAnswer: React.Dispatch<SetStateAction<boolean>>;
  id: string | null;
}

export function Answer({ answer, setAnswer, id }: propType) {
  const dispatch = useDispatch<AppDispatch>();
  const { question, fetchingDetails, error } = useSelector(
    (state: RootState) => state.question
  );
  const router = useRouter();
  const searchParams = useSearchParams();

  // Normalize id
  const [normalisedId, setNormalisedId] = useState<string>(
    Array.isArray(id) ? id[0] : id
  );

  // Separate states for comment and reply inputs
  const [commentText, setCommentText] = useState("");
  const [showSubmit, setShowSubmit] = useState(false);
  const [replyTexts, setReplyTexts] = useState<ReplyState>({});
  const [openComment, setOpenComment] = useState<string | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const emojiPickerRef = React.useRef<HTMLDivElement>(null);
  const emojiButtonRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (searchParams.get("answer")) {
      setNormalisedId(searchParams.get("answer") ?? "");
    }
  }, [searchParams]);

  useEffect(() => {
    if (normalisedId && answer) {
      dispatch(fetchSingleQuestion({ id: normalisedId }));

      router.push(`/discover?answer=${normalisedId}`);
    }
    return () => {
      router.push(`/discover`);
    };
  }, [normalisedId, dispatch, answer]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node) &&
        !emojiButtonRef.current?.contains(event.target as Node)
      ) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCommentChange = (event: React.FormEvent<HTMLDivElement>) => {
    const text = event.currentTarget.textContent || "";
    setCommentText(text);
    setShowSubmit(text.trim().length > 0);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (commentText.trim()) {
        handleCommentSubmit();
      }
    }
  };

  const handleCommentSubmit = () => {
    if (!commentText.trim()) return;
    dispatch(createQuestionComment({ text: commentText, id: normalisedId }));
    setCommentText("");
    if (commentInputRef.current) {
      commentInputRef.current.textContent = "";
    }
    setShowSubmit(false);
  };

  const handleReplySubmit = (commentId: string) => {
    dispatch(
      createQuestionCommentReply({
        text: replyTexts[commentId],
        questionId: normalisedId,
        replyId: commentId,
      })
    );
    setReplyTexts((prev) => ({ ...prev, [commentId]: "" })); // Clear input after submitting
  };

  const handleReplyChange = (commentId: string, text: string) => {
    setReplyTexts((prev) => ({ ...prev, [commentId]: text }));
  };

  const insertEmoji = (emojiData: EmojiClickData) => {
    if (commentInputRef.current) {
      const selection = window.getSelection();
      const range = selection?.getRangeAt(0);
      const emoji = document.createTextNode(emojiData.emoji);

      if (range) {
        range.insertNode(emoji);
        range.setStartAfter(emoji);
        range.setEndAfter(emoji);
        selection?.removeAllRanges();
        selection?.addRange(range);
      } else {
        commentInputRef.current.appendChild(emoji);
      }

      // Trigger the comment change handler
      const event = new Event("input", { bubbles: true });
      commentInputRef.current.dispatchEvent(event);

      // Close emoji picker
      setShowEmojiPicker(false);
    }
  };

  const commentInputRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="flex items-center w-screen h-screen justify-center py-4  bg-black/40 fixed top-0 left-0 z-50">
      <div
        className={` z-50    rounded-lg  flex flex-col bg-white min-h-screen shadow-lg lg:h-[85vh] max-w-3xl w-full h-full overflow-hidden my-auto   overflow-y-scroll scrollbar-hide`}
      >
        {/* close icon */}
        <div
          onClick={() => {
            setAnswer(false);
          }}
          className="rounded-full absolute right-3 top-2  bg-stone-100/80 cursor-pointer p-2 [&>img]:opacity-70 [&>img]:size-[16px]"
        >
          <X size={20} />
        </div>
        <LoadingHandler
          loading={fetchingDetails}
          loadingComponent={<p>Loading questions...</p>}
          errorComponent={
            <p style={{ color: "red" }}>{error || "Error fetching questions."}</p>
          }
          idleComponent={<p>Nothing to load yet.</p>}
          successComponent={
            <div>
              {question && question[normalisedId] && (
                <div className=" ">
                  <div className="flex items-center border-gray-300 pl-5 border-b-1 sticky top-0 z-30 bg-white   justify-between">
                    <div className="flex items-center  gap-2">
                      <Image
                        src={`/profile.svg`}
                        alt="😊"
                        width={10}
                        height={10}
                        className="bg-gray-200 size-6 flex items-center justify-center rounded-full "
                      />
                      <p className="text-sm">
                        {question![normalisedId]?.user?.fullName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {moment(question![normalisedId].createdAt).fromNow()}
                      </p>
                    </div>
                    <div className="flex gap-6 p-3 items-center justify-center">
                      <Image
                        src={"/uploadIcon.svg"}
                        width={16}
                        height={20}
                        alt="upload"
                      />
                      <div
                        onClick={() => {
                          setAnswer(false);
                        }}
                        className="rounded-fullbg-stone-100/80 cursor-pointer p-1 [&>img]:opacity-70 "
                      >
                        <X size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="border-stone-300 border-b-1 py-6 px-10  ">
                    <div className="px-5 flex flex-col  gap-3">
                      {question![normalisedId]?.image && (
                        <img
                          className={`w-full h-[300px] object-fit`}
                          src={question![normalisedId]?.image}
                          alt=""
                        />
                      )}
                      <p className="font-semibold">
                        {question![normalisedId]?.question}
                      </p>
                      <p className="text-sm ">
                        {question![normalisedId]?.description}
                      </p>
                      <div className="flex gap-2 items-center   justify-between">
                      
                       
                        <div>
                        {question![normalisedId].tags.map((tag, index) => (
                          <Button key={index} variant={"dsn"} size={"sm"}>
                            {tag}
                          </Button>
                        ))}
                      </div>

                      </div>
                      {/* Comment input section */}
                      <div className="relative w-full border  flex items-start p-2  gap-2  mb-4">
                         <Button
                          onClick={() => {
                            dispatch(upvote({ id: normalisedId }));
                          }}
                          variant={"ghost"}
                          size={"lg"}
                        >
                          <BiSolidUpvote size={20} />
                          {question![normalisedId].upVotes.length}
                        </Button>
                        <div className="relative flex-1">
                          <div
                            ref={commentInputRef}
                            contentEditable
                            onInput={handleCommentChange}
                            onKeyDown={handleKeyDown}
                            className="min-h-[40px]  max-h-[120px] w-full   px-4 focus:outline-none focus:border-pink-600 overflow-y-auto relative"
                            style={{
                              whiteSpace: "pre-wrap",
                              wordBreak: "break-word",
                            }}
                          >
                            {commentText === "" && (
                              <span className="pointer-events-none px-3 text-gray-400 absolute left-2 top-2 select-none">
                                Leave a comment
                              </span>
                            )}
                          </div>
                          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                            <button
                              ref={emojiButtonRef}
                              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                              className="text-gray-500 hover:text-pink-600 transition-colors p-2"
                              type="button"
                            >
                              <BsEmojiSmile size={20} />
                            </button>
                            {showSubmit && (
                              <button
                                onClick={handleCommentSubmit}
                                disabled={!showSubmit}
                                className="bg-pink-600 text-white rounded-full p-2 flex items-center justify-center"
                                type="button"
                              >
                                <IoSend />
                              </button>
                            )}
                          </div>
                          {showEmojiPicker && (
                            <div ref={emojiPickerRef} className="absolute right-0 bottom-full mb-2 z-50">
                              <div className="relative">
                                <button
                                  onClick={() => setShowEmojiPicker(false)}
                                  className="absolute right-2 top-2 z-10 text-gray-500 hover:text-pink-600 rounded-full bg-white p-1"
                                >
                                  <X size={16} />
                                </button>
                                <EmojiPicker
                                  onEmojiClick={insertEmoji}
                                  searchPlaceholder="Search emoji..."
                                  width={300}
                                  height={400}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="border-t-1 p-4 flex flex-col gap-4">
                      <h4 className="text-sm">
                        Answers {question![normalisedId].comments.length}
                      </h4>
                      {[...question![normalisedId].comments]
                        .sort(
                          (a, b) =>
                            moment(b.createdAt).valueOf() -
                            moment(a.createdAt).valueOf()
                        )
                        .map((post, index) => {
                          return (
                            <div
                              key={index}
                              className={`${index === 0 ? "border border-[#6AC5AE]" : "border"
                                } w-full flex flex-col gap-2 rounded-[24px] p-4`}
                            >
                              <div className="flex justify-between items-center  ">
                                <div className="flex items-center gap-2">
                                  <Image
                                    src={`/profile.svg`}
                                    alt="😊"
                                    width={30}
                                    height={30}
                                    className="bg-gray-200 size-7 flex items-center justify-center rounded-full "
                                  />
                                  <p className="text-sm">
                                    {post?.user?.fullName}
                                  </p>
                                  <p className="text-sm">
                                    {post.user.occupation}
                                  </p>
                                </div>
                                <div className="flex gap-2">
                                  <p className="text-sm date">
                                    {moment(post.createdAt).fromNow()}
                                  </p>
                                </div>
                              </div>
                              <p className="text-sm">{post.text}</p>
                              <div className="flex justify-between items-center py-2 gap-3 flex-wrap">
                                <div className="flex gap-2 items-center justify-between flex-1">
                                  <Button
                                    onClick={() => {
                                      setOpenComment(post._id);
                                    }}
                                    variant={"ghost"}
                                    size={"lg"}
                                    className=""
                                  >
                                    <BiSolidCommentDots size={20} />
                                    {post.replies.length}
                                  </Button>
                                  <Button
                                    onClick={() => {
                                      dispatch(
                                        upvoteComment({
                                          id: normalisedId,
                                          commentId: post._id,
                                        })
                                      );
                                    }}
                                    variant={"ghost"}
                                    size={"lg"}
                                    className=""
                                  >
                                    <BiSolidUpvote size={20} />
                                    {post.upVotes.length}
                                  </Button>
                                  <Button
                                    variant={"ghost"}
                                    size={"lg"}
                                    className=""
                                  >
                                    Gift
                                  </Button>
                                </div>
                                <div>
                                  <Button
                                    variant={"ghost"}
                                    size={"lg"}
                                    className="w-fit"
                                  >
                                    Open chat
                                  </Button>
                                </div>
                              </div>
                              {openComment === post._id && (
                                <div>
                                  <div className="reply-input flex justify-between mb-2">
                                    <input
                                      type="text"
                                      value={replyTexts[post._id] || ""}
                                      onChange={(e) =>
                                        handleReplyChange(
                                          post._id,
                                          e.target.value
                                        )
                                      }
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
                              )}
                              <div className="replies ml-4">
                                {post?.replies?.map((reply) => (
                                  <div key={reply._id} className="reply mb-2">
                                    <p className="text-gray-600">{reply?.text}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          }
        />
      </div>
    </div>
  );
}

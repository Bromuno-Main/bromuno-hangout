// Chat Interface (for replies/comments under a question)
import {User} from "./User";

export interface Chat {
    _id: string; // Question ID (typically from MongoDB ObjectId)
    user: User; // User who replied
    isUpVoted: boolean;
    upVotes: User[]; // List of users who upvoted the question
    text: string; // The text of the reply/comment
    createdAt: string; // The date when the reply was created (ISO string format)
    replies: ChatReply[]; // Nested replies (can be other comments/replies to the same comment)
}

export interface ChatReply {
    _id: string; // Question ID (typically from MongoDB ObjectId)
    user: User; // User who replied to the comment
    text: string; // The text of the reply
    createdAt: string; // The date the reply was created (ISO string format)
    isUpVoted: boolean;
    upVotes: User[]; // List of users who upvoted the question
}


// Question Interface (for the main question)
export interface Question {
    _id: string; // Question ID (typically from MongoDB ObjectId)
    question: string; // The question text
    description: string;
    isUpVoted: boolean;
    user: User; // The user who posted the question
    tags: string[]; // Tags related to the question
    upVotes: User[]; // List of users who upvoted the question
    comments: Chat[]; // List of comments (replies) to the question
    createdAt: string; // The date the question was created (ISO string format)
    updatedAt: string; // The date the question was last updated (ISO string format)
}

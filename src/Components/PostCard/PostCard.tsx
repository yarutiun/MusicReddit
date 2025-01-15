import { FaRegCommentAlt } from "react-icons/fa";
import up from "/up.png";
import down from "/down.png";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../store/slice/FeedSlice";
import { useState } from "react";

interface PostCardProps {
  info: {
    title: string;
    comments: number;
    id: string;
    over18: boolean;
    score: number;
    imageUrl: string | null;
    username: string;
    time: string;
  };
}

const PostCard = ({ info }: PostCardProps) => {
  const [voted, setVoted] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    if (voted === "up") return;
    dispatch(increment(info.id));
    setVoted("up");
  };

  const handleDecrement = () => {
    if (voted === "down") return;
    dispatch(decrement(info.id));
    setVoted("down");
  };

  return (
    <section className="rounded-lg mt-5 p-5 shadow-2xl bg-white w-full max-w-fit flex mb-4">
      {/* Voting Section */}
      <div className="flex flex-col items-center gap-1 pr-4">
        <button className="hover:scale-125" onClick={handleIncrement}>
          <img className="w-6 h-6" src={up} alt="upvote" />
        </button>
        <span
          className={`text-sm font-bold ${
            voted === "up"
              ? "text-green-700"
              : voted === "down"
              ? "text-red-700"
              : "text-gray-700"
          }`}
        >
          {info.score}
        </span>
        <button className="hover:scale-125" onClick={handleDecrement}>
          <img className="w-6 h-6" src={down} alt="downvote" />
        </button>
      </div>

      {/* Post Content */}
      <div>
        <h3 className="text-lg mb-2 text-left">{info.title}</h3>
        {info.imageUrl && <img src={info.imageUrl} alt={info.title} className="h-auto mb-3" />}
        <div className="w-auto border border-gray-400 mt-3"></div>
        <div className="flex justify-between mt-3">
          <div className="flex gap-2 items-center">
            <img
              src="https://www.redditstatic.com/avatars/avatar_default_01_24A0ED.png"
              alt="Profile Pic"
              className="rounded-full w-8 h-8 border-gray-700 border-2"
            />
            <span className="text-sm">{info.username}, posted</span>
            <div className="text-sm">{info.time}</div>
          </div>

          <div className="flex gap-2 items-center">
            <button>
              <FaRegCommentAlt className="w-5 h-5 hover:scale-105" />
            </button>
            <span className="text-sm">{info.comments}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostCard;

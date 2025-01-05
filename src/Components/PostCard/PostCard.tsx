import { FaRegCommentAlt } from "react-icons/fa";
import up from "/up.png";
import down from "/down.png";

interface PostCardProps {
    info: {
        title: string;
        imageUrl: string;
        username: string;
        userImg: string;
        time: string;
        comments: number;
    }
}


const PostCard = ({ info }: PostCardProps) => {
    const { title, imageUrl, username, userImg, time, comments } = info;

    return (
        <section className="rounded-lg mt-5 p-5 shadow-2xl bg-white w-full max-w-fit flex">
            {/* Voting Section */}
            <div className="flex flex-col items-center gap-1 pr-4">
                <button className="hover:scale-125">
                    <img className="w-6 h-6" src={up} alt="upvote" />
                </button>
                <span className="text-sm font-bold text-gray-700">123</span> {/* Replace 123 with dynamic vote count */}
                <button className="hover:scale-125">
                    <img className="w-6 h-6" src={down} alt="downvote" />
                </button>
            </div>

            {/* Post Content */}
            <div>
                <h3 className="text-lg mb-2 text-left">{title}</h3>
                {imageUrl && (
                    <img src={imageUrl} alt={title} className="h-auto mb-3" />
                )}
                <div className="w-auto border border-gray-400 mt-3"></div>
                <div className="flex justify-between mt-3">
                    <div className="flex gap-2 items-center">
                        <img src={userImg} alt="Profile Pic" className="rounded-full w-8 h-8 border-gray-700 border-2" />
                        <span className="text-sm">{username}, posted</span>
                        <div className="text-sm">{time}</div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <button>
                            <FaRegCommentAlt className="w-5 h-5 hover:scale-105" />
                        </button>
                        <span className="text-sm">{comments}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default PostCard;
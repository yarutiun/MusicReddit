import PostCard from "./PostCard";
import ya from "/Ya.jpg";

export const Feed = () => {
    const cardData = {
      title: 'This is me this summer in Cyprus',
      description: 'This is a description of the card.',
      imageUrl: ya, // Optional
      username: 'yarutiun',
      userImg: ya,
      time: '1 hour ago',
      comments: 52,
    };
  
    return (
      <div className="pl-6">
        <PostCard info={cardData} />
      </div>
    );
}
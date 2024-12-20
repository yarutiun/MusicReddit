import PostCard from "./PostCard";
import ya from "/Ya.jpg";

export const Feed = () => {
    const cardData = {
      title: 'This is me this summer in Cyprus',
      description: 'This is a description of the card.',
      imageUrl: ya // Optional
    };
  
    return (
      <PostCard info={cardData} />
    );
}

interface PostCardProps {
    info: {
        title: string;
        imageUrl: string;
    }
}

const PostCard = ({ info }: PostCardProps) => { //TODO: have to finish card - add upvotes, downvotes, comments, time, profile of user.
    const { title, imageUrl } = info;
  
    return (
        <section className="rounded-lg mt-5 p-5 m-3 shadow-2xl bg-white w-full max-w-screen-lg">
        <h3 className="text-lg mb-2 text-left">{title}</h3>
        {imageUrl && (
          <img src={imageUrl} alt={title} className="h-auto mb-3" />
        )}
      </section>
    );
  };

export default PostCard

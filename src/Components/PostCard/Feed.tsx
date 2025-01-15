import { useEffect } from "react";
import { fetchPosts } from "../../store/slice/FeedSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import PostCard from "./PostCard";
import utcToNormal from "../../Utils/utcToNormal";

export const Feed = () => {
  const feed = useSelector((state: RootState) => state.feed);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts("memes"));
  }, [dispatch]);

  // Check if loading is true, and show loading text
  if (feed.loading) {
    return <div className="text-center mt-5 ml-5 text-2xl font-bold">Loading...</div>;
  }

  // If there are no posts, display a message
  if (feed.error) {
    return <div className="text-center mt-5 text-2xl font-bold">No posts available</div>;
  }

  return (
    <div className="pl-6">
      {feed.posts.map((post) => (
        <PostCard key={post.data.id} info={{
          title: post.data.title,
          comments: post.data.num_comments,
          id: post.data.id,
          over18: post.data.over_18,
          score: post.data.score,
          imageUrl: post.data.preview?.images[0]?.source.url || null,
          username: post.data.author,
          time: utcToNormal(post.data.created_utc),
        }} />
      ))}
    </div>
  );
};

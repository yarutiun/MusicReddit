import { useEffect } from "react";
import { fetchPosts } from "../../store/slice/FeedSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import PostCard from "./PostCard";

export const Feed = () => {
  const feed = useSelector((state: RootState) => state.feed);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts("music"));
  }, [dispatch]);

  const firstPost: { title: string; comments: number; id: string; over18: boolean; score: number; imageUrl: string | null; username: string; time: string; }[] = [];
  if(feed.posts.length > 0) {
    for (let i = 0; i < feed.posts.length; i++) {
      firstPost.push({title: feed.posts[i].data.title,
        comments: feed.posts[i].data.num_comments,
        id: feed.posts[i].data.id,
        over18: feed.posts[i].data.over_18,
        score: feed.posts[i].data.score,
        imageUrl: feed.posts[i].data.preview?.images[i].source.url || null,
        username: feed.posts[i].data.author,
        time: "1 hour ago",})
      }}

  return (
    <div className="pl-6">
      {firstPost && feed.posts.map((post, index) => (
        <PostCard key={post.data.id} info={firstPost[index]} />
      ))}
    </div>
  );
};

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the Post interface based on Reddit API response
interface Post {
  kind: string;
  data: {
    title: string;
    num_comments: number;
    id: string;
    over_18: boolean;
    score: number;
    author: string;
    created_utc: number;
    preview: {
      images: {
        source: {
          url: string;
        };
      }[];
    };
  };
}

// Define the FeedState interface to represent the structure of the state
interface FeedState {
  posts: Post[];
  loading: boolean;
  error: string | undefined;
}

// Initial state structure for the feed
const initialState: FeedState = {
  posts: [],
  loading: false,
  error: undefined,
};

// Async thunk to fetch posts from Reddit API
export const fetchPosts = createAsyncThunk(
  "feed/fetchPosts",
  async (subredditName: string) => {
    const response = await fetch(`https://www.reddit.com/r/${subredditName}.json?limit=10`);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data = await response.json();
    return data;
  }
);

// Slice to manage the feed state
const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    // Increment post score
    increment: (state, action) => {
      const post = state.posts.find((post) => post.data.id === action.payload);
      if (post) {
        post.data.score++;
    } 
    },
    // Decrement post score
    decrement: (state, action) => {
      const post = state.posts.find((post) => post.data.id === action.payload);
      if (post) {
        post.data.score--;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload.data.children;
        state.loading = false;
        state.error = undefined;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const { increment, decrement } = feedSlice.actions;
export default feedSlice.reducer;

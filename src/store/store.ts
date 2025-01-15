import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./slice/FeedSlice";

const store = configureStore({
    reducer: {
        feed: feedReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;  // create a type for the RootState
export type AppDispatch = typeof store.dispatch;  // create a type for the AppDispatch

export default store;
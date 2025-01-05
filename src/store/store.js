import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    search: {
        query: "",
        results: [],
    },
    posts: [],
    activeSubreddit: "",
};

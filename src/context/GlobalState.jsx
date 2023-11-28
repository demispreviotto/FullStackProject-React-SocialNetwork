import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
    posts: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getPosts = async () => {
        const res = await axios.get("http://localhost:8080/posts/");
        dispatch({
            type: "GET_POSTS",
            payload: res.data
        })
    };

    return (
        <GlobalContext.Provider
            value={{
                posts: state.posts,
                getPosts,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
import { createContext, useReducer } from "react";
import axios from "axios";
import CommentsReducer from './CommentsReducer.js';

const token = JSON.parse(localStorage.getItem("token"));
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    token: token || null,
    user: user || null,
    comments: [],
    comment: {}
};
const API_URL = "http://localhost:8080/comments";

export const CommentContext = createContext(initialState);

export const CommentProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CommentsReducer, initialState);

    const newComment = async (data, postId) => {
        try {
            const res = await axios.post(`${API_URL}/${postId}`, data,
                {
                    headers: {
                        authorization: token,
                    },
                });
            dispatch({
                type: "NEW_COMMENT",
                payload: res.data.comment
            })
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <CommentContext.Provider
            value={{
                newComment,
                comment: state.comment,
            }}
        >
            {children}
        </CommentContext.Provider>
    );
};
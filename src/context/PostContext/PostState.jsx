import { createContext, useReducer } from "react";
import axios from "axios";
import PostReducer from './PostReducer.js';

const token = JSON.parse(localStorage.getItem("token"));
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    token: token || null,
    user: user || null,
    posts: [],
};
const API_URL = "http://localhost:8080/posts";

export const PostContext = createContext(initialState);

export const PostProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PostReducer, initialState);

    const getPosts = async () => {
        try {
            const res = await axios.get(API_URL);
            dispatch({
                type: "GET_POSTS",
                payload: res.data
            })
        } catch (error) {
            console.error(error);
        }
    };
    const newPost = async (post) => {
        try {
            const res = await axios.post(API_URL, post,
                {
                    headers: {
                        authorization: token,
                    },
                });
            dispatch({
                type: "NEW_POST",
                payload: res.data.post
            })
        } catch (error) {
            console.error(error);
        }
    };
    const likePost = async (postId) => {
        try {
            const res = await axios.put(`${API_URL}/like/${postId}`, {}, {
                headers: {
                    authorization: token,
                },
            });
            dispatch({
                type: "LIKE_POST",
                payload: res.data,
            })
        } catch (error) {
            console.error(error);
        }
        // const deletePost = async (_id) => {
        //     try {
        //         const res = await axios.delete(`${API_URL}/${_id}`, {
        //             headers: {
        //                 authorization: token,
        //             },
        //         });
        //         // getPosts()
        //         if (res.data) {
        //             dispatch({
        //                 type: "DELETE_POST",
        //                 payload: _id,
        //             });
        //         }
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
        // const getById = async (_id) => {
        //     try {
        //         const res = await axios.get(`${API_URL}/${_id}`);
        //         dispatch({
        //             type: "GET_TASK_BY_ID",
        //             payload: res.data,
        //         });
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
        // const updateById = async (_id, post) => {
        //     try {
        //         await axios.put(`${API_URL}/${_id}`, post, {
        //             headers: {
        //                 authorization: token,
        //             },
        //         });
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
    };

    return (
        <PostContext.Provider
            value={{
                posts: state.posts,
                getPosts,
                newPost,
                likePost,
            }}
        >
            {children}
        </PostContext.Provider>
    );
};
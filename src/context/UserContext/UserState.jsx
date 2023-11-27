import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from './UserReducer.js';

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
    token: token ? token : null,
    user: null,
};
const API_URL = "http://localhost:8080";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const login = async (user) => {
        const res = await axios.post(API_URL + "/users/login", user);
        dispatch({
            type: "LOGIN",
            payload: res.data,
        });
        if (res.data) {
            localStorage.setItem("token", JSON.stringify(res.data.token));
        }
    };
    const getUserInfo = async () => {
        try {
            const token = JSON.parse(localStorage.getItem("token"));
            const res = await axios.get(
                API_URL + "/users/profile",
                {
                    headers: {
                        authorization: token,
                    },
                }
            );
            dispatch({
                type: "GET_USER_INFO",
                payload: res.data,
            })
        } catch (error) {
            if (error.response && error.response.status === 404) {
                dispatch({
                    type: "GET_USER_INFO",
                    payload: null,
                });
            } else {
                console.error("Error fetching user info:", error);
            }
        }
    }

    const logout = async () => {
        localStorage.removeItem("token");
        dispatch({
            type: "LOGOUT",
        });
    };
    return (
        <UserContext.Provider
            value={{
                token: state.token,
                user: state.user,
                login,
                getUserInfo,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
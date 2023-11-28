import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from './UserReducer.js';

const token = JSON.parse(localStorage.getItem("token"));
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    token: token || null,
    user: user || null,
};
const API_URL = "http://localhost:8080/users";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const register = async (userValues) => {
        try {
            const res = await axios.post(API_URL + "/register", userValues);
            dispatch({
                type: "REGISTER",
                payload: res.data,
            });
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };
    const login = async (userValues) => {
        const res = await axios.post(API_URL + "/login", userValues);
        dispatch({
            type: "LOGIN",
            payload: res.data,
        });
        if (res.data) {
            localStorage.setItem("token", JSON.stringify(res.data.token));
            localStorage.setItem("user", JSON.stringify(res.data.user));
        }
    };
    const getUserInfo = async () => {
        try {
            const token = JSON.parse(localStorage.getItem("token"));
            const res = await axios.get(API_URL + "/profile",
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
    };
    const logout = async () => {
        const token = JSON.parse(localStorage.getItem("token"))
        const res = await axios.delete(API_URL + '/logout', {
            headers: {
                authorization: token,
            },
        })
        dispatch({
            type: "LOGOUT",
        });
        if (res.data) { localStorage.clear() };
    };
    return (
        <UserContext.Provider
            value={{
                token: state.token,
                user: state.user,
                register,
                login,
                getUserInfo,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
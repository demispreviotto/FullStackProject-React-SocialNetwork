const users = (state, action) => {
    switch (action.type) {
        case "REGISTER":
            return {
                ...state,
                user: action.payload,
                token: action.payload.token,
            };
        case "LOGIN":
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
            };
        case "GET_USER_INFO":
            return {
                ...state,
                user: action.payload.user,
            };
        case "LOGOUT":
            return {
                ...state,
                token: null,
                user: null,
            };
        default:
            return state;
    }
};
export default users;
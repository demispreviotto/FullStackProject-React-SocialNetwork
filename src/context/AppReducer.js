const posts = (state, action) => {
    switch (action.type) {
        case "GET_POSTS":
            return {
                ...state,
                posts: action.payload, //res.data.results
            };
        default:
            return state;
    }
};
export default posts;
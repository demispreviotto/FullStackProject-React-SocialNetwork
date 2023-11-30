const posts = (state, action) => {
    switch (action.type) {
        case "NEW_POST":
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case "LIKE_POST" || "UN_LIKE_POST":
            const updatedPosts = state.posts.map((post) =>
                post._id === action.payload._id ? action.payload : post
            );
            return {
                ...state,
                posts: updatedPosts,
            };
        case "GET_POST_BY_ID":
            return {
                ...state,
                post: action.payload,
            };
        default:
            return state;
    }
};
export default posts;
const posts = (state, action) => {
    switch (action.type) {
        case "NEW_POST":
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case "LIKE_POST":
            const updatedPosts = state.posts.map((post) =>
                post._id === action.payload._id ? action.payload : post
            );
            return {
                ...state,
                posts: updatedPosts,
            };
        default:
            return state;
    }
};
export default posts;
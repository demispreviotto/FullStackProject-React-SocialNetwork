const posts = (state, action) => {
    switch (action.type) {
        case "NEW_POST":
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        default:
            return state;
    }
};
export default posts;
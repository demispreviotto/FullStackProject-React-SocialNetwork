const comments = (state, action) => {
    switch (action.type) {
        case "NEW_COMMENT":
            return {
                ...state,
                comments: [...state.comments, action.payload],
            };
        case "LIKE_COMMENT" || "UN_LIKE_COMMENT":
            const updatedComments = state.comments.map((comment) =>
                comment._id === action.payload._id ? action.payload : comment
            );
            return {
                ...state,
                comments: updatedComments,
            };
        default:
            return state;
    }
};
export default comments;
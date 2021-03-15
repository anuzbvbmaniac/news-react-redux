import { GET_POST_BY_ID, GET_POSTS } from "../types";

export default function postsReducer(state = {}, action) {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, ...action.payload }
        case GET_POST_BY_ID:
            return { ...state, articleById: action.payload }
        default:
            return state
    }
}

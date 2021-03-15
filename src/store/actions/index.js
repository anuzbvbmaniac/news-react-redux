import * as api from '../../api';
import { ADD_NEWSLETTER, CLEAR_NEWSLETTER, GET_POSTS } from "../types";

/* ---------------------------------------------------------
                          POSTS
--------------------------------------------------------- */

export const getPosts = (homePosts, page, order, limit) => ({
    type: GET_POSTS,
    payload: api.getPosts(homePosts, page, order, limit)
});

/* ---------------------------------------------------------
                       NEWSLETTER
--------------------------------------------------------- */

export const addNewsLetter = (data) => ({
    type: ADD_NEWSLETTER,
    payload: api.addNewsLetter(data)
});

export const clearNewsLetter = () => ({
    type: CLEAR_NEWSLETTER,
    payload: {
        message: false,
        email : []
    }
})

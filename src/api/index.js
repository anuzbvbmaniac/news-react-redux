import axios from "axios";

const BASE_URL = "http://localhost:3004";

export const getPosts = async (prevState, page = 1, order = 'asc', limit = 10) => {
    try {
        const response = await axios.get(`${BASE_URL}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);

        return {
            posts: prevState.posts ? [...prevState.posts, ...response.data] : response.data,
            page: page,
            end: response.data.length === 0,
        }
    } catch (err) {
        console.log(err.message);
    }
}

export const getPostById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/posts/${id}`);

        return response.data;
    } catch (error) {
        return '404';
    }
}


/* ---------------------------------------------------------
                       NEWSLETTER
--------------------------------------------------------- */

export const addNewsLetter = async (data) => {
    try {

        const user = await axios.get(`${BASE_URL}/newsletter?email=${data.email}`);

        if (!Array.isArray(user.data) || !user.data.length) {
            // Add User
            const response = await axios({
                method: 'POST',
                url: `${BASE_URL}/newsletter`,
                data: {
                    email: data.email
                }
            });

            return {
                message: 'success',
                email: response.data
            }
        } else {
            // Notify User with Already in DB.
            return {
                message: 'failure'
            }
        }

    } catch (error) {
        throw error;
    }
}

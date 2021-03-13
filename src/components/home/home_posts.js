import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../../store/actions";

import { Spinner } from "react-bootstrap";

const HomePosts = () => {

    const homePosts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(getPosts({}, 1, 'desc', 6));
    }, [dispatch])

    const loadMorePosts = () => {
        const page = homePosts.page + 1;
        setLoading(true);
        dispatch(getPosts(homePosts, page, 'desc', 6));
    }

    return (
        <>
            {
                loading
                    ? <div style={{ textAlign: 'center' }}>
                        <Spinner animation={'border'} role={'status'}>
                        </Spinner>
                    </div>
                    : null
            }

            {
                !homePosts.end
                    ? <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => loadMorePosts()}
                    >
                        Load More
                    </button>
                    : null
            }
        </>
    );
};

export default HomePosts;

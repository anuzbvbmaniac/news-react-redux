import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap'

import Moment from "react-moment";

import { getPosts } from "../../store/actions";

const HomePosts = () => {

    const homePosts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts({}, 1, 'desc', 6));
    }, [dispatch])

    const loadMorePosts = () => {
        const page = homePosts.page + 1;
        dispatch(getPosts(homePosts, page, 'desc', 6));
    }

    return (
        <>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {
                    homePosts.posts ?
                        homePosts.posts.map((item) => (
                            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden" key={item.id}>
                                <div className="flex-shrink-0">
                                    <img className="h-48 w-full object-cover" src={item.image} alt=""/>
                                </div>
                                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                    <div className="flex-1">
                                        <LinkContainer to={`/article/${item.id}`} className="block mt-2">
                                            <p className="text-xl font-semibold text-gray-900">
                                                {item.title}
                                            </p>
                                        </LinkContainer>
                                        <p className="mt-3 text-base text-gray-500">
                                            {item.excerpt}
                                        </p>
                                    </div>
                                    <div className="mt-6 flex items-center">
                                        <div className="flex-shrink-0">
                                            <a href="/">
                                                <span className="sr-only">Roel Aufderehar</span>
                                                <img className="h-10 w-10 rounded-full" src={`https://robohash.org/${item.author}.png`} alt=""/>
                                            </a>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">
                                                <a href="/" className="hover:underline">
                                                    {item.author}
                                                </a>
                                            </p>
                                            <div className="flex space-x-1 text-sm text-gray-500">
                                                <time dateTime="2020-03-16">
                                                    <Moment format="DD MMMM YYYY">
                                                        {item.createdAt}
                                                    </Moment>
                                                </time>
                                                <span aria-hidden="true">·</span>
                                                <span>
                                              6 min read
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        : null
                }

            </div>

            <div className="flex justify-center">
                {
                    !homePosts.end
                        ? <button
                            type="button"
                            className="px-4 py-2 mt-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-1/2"
                            onClick={() => loadMorePosts()}
                        >
                            Load More
                        </button>
                        : null
                }
            </div>
        </>
    );
};

export default HomePosts;

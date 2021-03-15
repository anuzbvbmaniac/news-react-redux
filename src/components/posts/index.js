import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";

import NewsLetter from "../utils/newsLetter";
import { getPostById } from "../../store/actions";

const Article = (props) => {

    const article = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostById(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    return (
        <>
            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <main className="flex-1 relative overflow-y-auto focus:outline-none">

                    {
                        article.articleById ?

                            <div className="py-8 xl:py-10">
                                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
                                    <div className="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
                                        <div className="">
                                            <img src={article.articleById.imagexl} alt="" className={'rounded'}/>
                                        </div>
                                        <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                                            <div>
                                                <h1 className="text-2xl font-bold text-gray-900 mt-4">{article.articleById.title}</h1>
                                                <p className="mt-2 text-sm text-gray-500"> #{article.articleById.id} Author: <a href="/" className="font-medium text-gray-900">{article.articleById.author}</a> in <a href="/" className="font-medium text-gray-900">
                                                    <Moment format="DD MMMM YYYY">
                                                        {article.articleById.createdAt}
                                                    </Moment>
                                                </a></p>
                                            </div>
                                        </div>
                                        <aside className="mt-8 xl:hidden">
                                            <h2 className="sr-only">Details</h2>
                                            <div className="space-y-5">
                                                <div className="flex items-center space-x-2">
                                                    <svg className="h-5 w-5 text-green-500" data-todo-x-description="Heroicon name: solid/lock-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"></path>
                                                    </svg>
                                                    <span className="text-green-700 text-sm font-medium">Open Issue</span></div>
                                                <div className="flex items-center space-x-2">
                                                    <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chat-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
                                                    </svg>
                                                    <span className="text-gray-900 text-sm font-medium">4 comments</span></div>
                                                <div className="flex items-center space-x-2">
                                                    <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/calendar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                                                    </svg>
                                                    <span className="text-gray-900 text-sm font-medium">Created on <time dateTime="2020-12-02">Dec 2, 2020</time></span></div>
                                            </div>
                                            <div className="mt-6 border-t border-b border-gray-200 py-6 space-y-8">
                                                <div>
                                                    <h2 className="text-sm font-medium text-gray-500">Assignees</h2>
                                                    <ul className="mt-3 space-y-3">
                                                        <li className="flex justify-start">
                                                            <a href="/" className="flex items-center space-x-3">
                                                                <div className="flex-shrink-0"><img className="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=256&amp;h=256&amp;q=80" alt=""/></div>
                                                                <div className="text-sm font-medium text-gray-900">Eduardo Benz</div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h2 className="text-sm font-medium text-gray-500">Tags</h2>
                                                    <ul className="mt-2 leading-8">
                                                        <li className="inline">
                                                            <a href="/" className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                                                                <div className="absolute flex-shrink-0 flex items-center justify-center"><span className="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true"></span></div>
                                                                <div className="ml-3.5 text-sm font-medium text-gray-900">Bug</div>
                                                            </a>
                                                        </li>
                                                        <li className="inline">
                                                            <a href="/" className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                                                                <div className="absolute flex-shrink-0 flex items-center justify-center"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true"></span></div>
                                                                <div className="ml-3.5 text-sm font-medium text-gray-900">Accessibility</div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </aside>
                                        <div className="py-3 xl:pt-6 xl:pb-0">
                                            <h2 className="sr-only">Description</h2>
                                            <div className="prose max-w-none" dangerouslySetInnerHTML={
                                                { __html: article.articleById.content }
                                            }/>
                                        </div>

                                    </div>
                                    <aside className="hidden xl:block xl:pl-8">
                                        <h2 className="sr-only">Details</h2>
                                        <div className="space-y-5">

                                            <div className="flex items-center space-x-2">
                                                <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/calendar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                                                </svg>
                                                <span className="text-gray-900 text-sm font-medium">Created on <time dateTime="2020-12-02"><Moment format="DD MMMM YYYY">
                                                    {article.articleById.createdAt}
                                                </Moment></time></span>
                                            </div>

                                            <div className="flex items-center space-x-2">
                                                <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chat-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"/>
                                                </svg>
                                                <span className="text-gray-900 text-sm font-medium">4 comments</span>
                                            </div>

                                        </div>
                                        <div className="mt-6 border-t border-gray-200 py-6 space-y-8">
                                            <div>
                                                <h2 className="text-sm font-medium text-gray-500">Author</h2>
                                                <ul className="mt-3 space-y-3">
                                                    <li className="flex justify-start">
                                                        <a href="/" className="flex items-center space-x-3">
                                                            <div className="flex-shrink-0"><img className="h-5 w-5 rounded-full" src={`https://robohash.org/${article.articleById.author}.png`} alt=""/></div>
                                                            <div className="text-sm font-medium text-gray-900">{article.articleById.author}</div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h2 className="text-sm font-medium text-gray-500">Tags</h2>
                                                <ul className="mt-2 leading-8">
                                                    <li className="inline mr-1">
                                                        <a href="/" className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                                                            <div className="text-sm font-medium text-gray-900">News</div>
                                                        </a>
                                                    </li>
                                                    <li className="inline">
                                                        <a href="/" className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                                                            <div className="text-sm font-medium text-gray-900">Science</div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>

                            : null
                    }

                    <NewsLetter/>

                </main>

            </div>
        </>
    );
};

export default Article;

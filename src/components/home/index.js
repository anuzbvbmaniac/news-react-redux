import React from 'react';

import HomePosts from "./home_posts";
import NewsLetter from "../utils/newsLetter";

const Home = () => {
    return (
        <>
            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex={0} data-todo-x-data="" data-todo-x-init="$el.focus()">
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <h1 className="text-2xl font-semibold text-gray-900">Home</h1>
                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <div className="relative max-w-7xl mx-auto">
                                <HomePosts/>
                            </div>
                        </div>
                    </div>
                    <NewsLetter/>
                </main>
            </div>
        </>
    )
}


export default Home;

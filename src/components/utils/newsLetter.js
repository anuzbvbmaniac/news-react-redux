import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Form } from "react-bootstrap";
import { addNewsLetter, clearNewsLetter } from "../../store/actions";
import { showToast } from "./tools";

const NewsLetter = () => {

    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();

    const textInput = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = textInput.current.value;

        dispatch(addNewsLetter({ email: value }));
    }

    useEffect(() => {
        if (userData.message) {
            if (userData.message === 'success') {
                showToast('success', 'Thank you for subscribing.');
                textInput.current.value = '';
                // dispatch(clearNewsLetter());
            }
            if (userData.message === 'failure') {
                showToast('error', 'You are already our subscriber.');
                // dispatch(clearNewsLetter());
            }
        }
    }, [userData]);

    useEffect(() => {
        return () => {
            dispatch(clearNewsLetter());
        }
    }, [dispatch]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="px-6 py-6 bg-indigo-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
                <div className="xl:w-0 xl:flex-1">
                    <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                        Want news and updates before anyone else?
                    </h2>
                    <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
                        Sign up for our newsletter to stay up to date.
                    </p>
                </div>
                <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                    <Form onSubmit={handleSubmit} className="sm:flex">
                        <label htmlFor="emailAddress" className="sr-only">Email address</label>
                        <Form.Control
                            type={'text'}
                            placeholder={'Example: youremail@email.com'}
                            name={'email'}
                            ref={textInput}
                            className={"w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"}
                        />
                        <button type="submit" className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
                            Notify me
                        </button>
                    </Form>
                    <p className="mt-3 text-sm text-indigo-200">
                        We will never share your email with anyone else.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;

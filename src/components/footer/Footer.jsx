import React from "react";
import { useState } from "react";
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
} from "react-icons/ai";

import { Item } from "./Item";

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false);
    const firstColumn = [
        "Get help",
        "Become a chef",
        "Promotions",
        "About Cookiez",
    ];
    const secondColumn = [
        "Chef near me",
        "View all home made foods",
        "View all cities",
        "View all chefs",
    ];
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <footer className='bg-black text-white'>
            <div className='grid-row-1 grid h-auto '>
                <div className='grid grid-cols-1 px-20 py-6 xl:grid-cols-5 '>
                    <div className='col-span-2'>
                        <div className='text-3xl font-extrabold hover:text-teal-200'>
                            COOKIEZ
                        </div>
                        <div className='flex flex-row justify-start '>
                            <span
                                className='mr-4  mt-4 inline-flex  cursor-pointer items-center rounded-full 
                bg-gray-200 p-2 hover:bg-teal-500  hover:text-gray-100 sm:my-6'
                            >
                                <AiOutlineFacebook
                                    className='text-gray-600'
                                    size='1.75rem'
                                />
                            </span>
                            <span
                                className='mr-4 mt-4 inline-flex cursor-pointer items-center rounded-full bg-gray-200 
                p-2 hover:bg-teal-500   hover:text-gray-100 sm:my-6'
                            >
                                <AiOutlineTwitter
                                    className='text-gray-600'
                                    size='1.75rem'
                                />
                            </span>
                            <span
                                className='w-50 mr-4 mt-4 inline-flex cursor-pointer items-center rounded-full  bg-gray-200
                p-2 hover:bg-teal-500   hover:text-gray-100 sm:my-6'
                            >
                                <AiOutlineInstagram
                                    className='text-gray-600'
                                    size='1.75rem'
                                />
                            </span>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <Item
                            className='col-start-3 col-end-4'
                            arr={firstColumn}
                        />
                    </div>
                    <Item
                        className='col-start-4 col-end-5'
                        arr={secondColumn}
                    />
                </div>
            </div>
        </footer>
    );
}

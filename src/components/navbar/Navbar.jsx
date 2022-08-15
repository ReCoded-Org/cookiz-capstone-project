import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
    // this is a temporary state, when we apply login auth. this will be replaced with actual state
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <>
            <nav className='tablet:pl-3 tablet:pr-3 m-auto flex items-center rounded-[100px] pt-[1.5rem] pb-[1.5rem] pl-8 pr-8 font-opensans'>
                <div className='navbar flex w-[100%] items-center justify-between'>
                    <div className='logo tablet:text-xl text-2xl'>
                        <Link href='#'>
                            <a>
                                <span className='font-black'>COOK</span>IEZ
                            </a>
                        </Link>
                    </div>
                    {loggedIn ? (
                        <Menu
                            as='div'
                            className='relative inline-block text-left'
                        >
                            <div>
                                <Menu.Button className='inline-flex w-full justify-center  gap-4 px-4 py-2 font-sans text-black  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                                    <h1 className='pt-2 text-lg'>
                                        Merry Curry
                                    </h1>
                                    <Image
                                        src='/images/Avatar.png'
                                        width='45'
                                        height='45'
                                        layout='intrinsic'
                                        alt='chef'
                                    />
                                </Menu.Button>
                            </div>

                            <Menu.Items className='absolute right-0  w-56 origin-top-right divide-y divide-gray-100 rounded-[40px] bg-white p-3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                <div className='px-1 py-1 '>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active
                                                        ? " bg-green-900  text-white"
                                                        : "text-gray-900"
                                                } text-m  group flex w-full items-center  rounded-[10px] px-2  py-2 font-sans`}
                                            >
                                                <span className='pr-1 text-lg font-bold'>
                                                    +
                                                </span>{" "}
                                                Add a new food
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active
                                                        ? " bg-green-900  text-white"
                                                        : "text-gray-900"
                                                } text-m  group flex w-full items-center  rounded-[10px] px-2  py-2 font-sans`}
                                            >
                                                Dashboard
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active
                                                        ? " bg-green-900  text-white"
                                                        : "text-gray-900"
                                                } text-m  group flex w-full items-center  rounded-[10px] px-2  py-2 font-sans`}
                                            >
                                                Account Settings
                                            </button>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active
                                                        ? " bg-green-900  text-white"
                                                        : "text-gray-900"
                                                } text-m  group flex w-full items-center  rounded-[10px] px-2  py-2 font-sans`}
                                            >
                                                Logout
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Menu>
                    ) : (
                        <div className='nav-list'>
                            <ul className='tablet:text-base flex items-center gap-10 text-lg'>
                                <li>
                                    <button>En</button>/<button>Tr</button>
                                </li>
                                <li onClick={setLoggedIn(true)}>Login</li>
                                <li>Sign up</li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;

import { Menu } from "@headlessui/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useEffect } from "react";

function Navbar() {
    // this is a temporary state, when we apply login auth. this will be replaced with actual state
    const [loggedIn, setLoggedIn] = useState(false);
    const { t } = useTranslation("navbar");

    const handleLogOut = () => {
        setLoggedIn(false);
        localStorage.removeItem("id");
    };

    useEffect(() => {
        if (localStorage.getItem("id")) {
            setLoggedIn(true);

            axios
                .get("https://cookiez-app.herokuapp.com/api/customer/new")
                .then((res) => console.log(res));
        }
    }, []);

    // useEffect(() => {}, []);

    return (
        <>
            <nav className='tablet:pl-3 tablet:pr-3 fixed m-auto flex w-[100%] items-center bg-white pt-[1.5rem] pb-[1.5rem] pl-8 pr-8 font-opensans'>
                <div className='navbar flex w-[100%] items-center justify-between'>
                    <div className='logo tablet:text-xl text-2xl'>
                        <Link href='/'>
                            <a>
                                <span className='font-black'>COOK</span>IEZ
                            </a>
                        </Link>
                    </div>
                    {loggedIn ? (
                        <div>
                            <Menu
                                as='div'
                                className='relative inline-block text-left'
                            >
                                <div>
                                    <Menu.Button className='inline-flex w-full justify-center gap-4 px-4 py-2 font-sans text-black  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
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
                                                <Link href='/addmealmodal'>
                                                    <button
                                                        className={`${
                                                            active
                                                                ? " bg-green-900  text-white"
                                                                : "text-gray-900"
                                                        } text-m  group flex w-full items-center  rounded-[10px] px-2  py-2 font-sans`}
                                                    >
                                                        <span className='pr-1 text-lg font-bold'>
                                                            +
                                                        </span>
                                                        {t("add-new-food")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link href='/landingmeal'>
                                                    <button
                                                        className={`${
                                                            active
                                                                ? " bg-green-900  text-white"
                                                                : "text-gray-900"
                                                        } text-m  group flex w-full items-center  rounded-[10px] px-2  py-2 font-sans`}
                                                    >
                                                        {t("dashboard")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link href='/profile'>
                                                    <button
                                                        className={`${
                                                            active
                                                                ? " bg-green-900  text-white"
                                                                : "text-gray-900"
                                                        } text-m  group flex w-full items-center  rounded-[10px] px-2  py-2 font-sans`}
                                                    >
                                                        {t("account-settings")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={handleLogOut}
                                                    className={`${
                                                        active
                                                            ? " bg-green-900  text-white"
                                                            : "text-gray-900"
                                                    } text-m  group flex w-full items-center  rounded-[10px] px-2  py-2 font-sans`}
                                                >
                                                    {t("logout")}
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Menu>
                            <Link href='/' locale='en'>
                                <a>En</a>
                            </Link>
                            /
                            <Link href='/' locale='tr'>
                                <a>Tr</a>
                            </Link>
                        </div>
                    ) : (
                        <div className='nav-list'>
                            <ul className='tablet:text-base flex items-center gap-10 text-lg'>
                                <Link href='/signin'>{t("login")}</Link>
                                <Link href='/signup'>{t("signup")}</Link>
                                <li>
                                    <Link href='/' locale='en'>
                                        <a>En</a>
                                    </Link>
                                    /
                                    <Link href='/' locale='tr'>
                                        <a>Tr</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;

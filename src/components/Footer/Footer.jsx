import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className='footer w-auto bg-black pt-[5rem] pb-[5rem] pl-[4rem] pr-[4rem] font-opensans text-[1.5rem] text-white'>
                <div className='footer-wrapper mb-[8rem] flex justify-between'>
                    <div className='footer-logo w-[50%]'>
                        <div className='logo font-bold uppercase'>
                            <Link href='#'>
                                <a>
                                    cook<span className='font-thin'>iez</span>
                                </a>
                            </Link>
                        </div>
                        <div className='footer-icons'></div>
                    </div>

                    <div className='footer-navigation flex w-[50%] items-center justify-around'>
                        <div className='nav-links_left'>
                            <ul>
                                <li className='mb-3 hover:underline'>
                                    <Link href='#'>
                                        <a>Get Help</a>
                                    </Link>
                                </li>
                                <li className='mb-3 hover:underline'>
                                    <Link href='#'>
                                        <a>Become a chef</a>
                                    </Link>
                                </li>
                                <li className='mb-3 hover:underline'>
                                    <Link href='#'>
                                        <a>Promotions</a>
                                    </Link>
                                </li>
                                <li className='mb-3 hover:underline'>
                                    <Link href='#'>
                                        <a>About Cookiez</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='nav-links_right'>
                            <ul>
                                <li className='mb-3 hover:underline'>
                                    <Link href='#'>
                                        <a>Chefs near me</a>
                                    </Link>
                                </li>
                                <li className='mb-3 hover:underline'>
                                    <Link href='#'>
                                        <a>View all foods</a>
                                    </Link>
                                </li>
                                <li className='mb-3 hover:underline'>
                                    <Link href='#'>
                                        <a>View all cities</a>
                                    </Link>
                                </li>
                                <li className='mb-3 hover:underline'>
                                    <Link href='#'>
                                        <a>View all chefs</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='copyright text-center text-[1rem] font-normal'>
                    Cookiez Copyright 2022
                </div>
            </footer>
        </>
    );
};

export default Footer;

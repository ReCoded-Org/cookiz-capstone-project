import Link from "next/link";
import { useState } from "react";

function Navbar() {
    // this is a temporary state, when we apply login auth. this will be replaced with actual state
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <>
            <nav className='m-auto flex items-center rounded-[100px] pt-[1.5rem] pb-[1.5rem] pl-8 pr-8 font-opensans tablet:pl-3 tablet:pr-3'>
                <div className='navbar flex w-[100%] items-center justify-between'>
                    <div className='logo text-2xl tablet:text-xl'>
                        <Link href='#'>
                            <a>
                                <span className='font-black'>COOK</span>IEZ
                            </a>
                        </Link>
                    </div>
                    {loggedIn ? (
                        <div>User logged in</div>
                    ) : (
                        <div className='nav-list'>
                            <ul className='flex items-center gap-10 text-lg tablet:text-base'>
                                <li>Login</li>
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

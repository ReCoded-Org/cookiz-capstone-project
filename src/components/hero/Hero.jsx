import Link from "next/link";
import { useState } from "react";
function Hero() {
    const [search, setSearch] = useState("");

    return (
        <div className='hero-container h-screen bg-herobg bg-cover'>
            <div className='wrapper m-auto flex h-screen w-auto max-w-[1280px] flex-col items-end justify-center'>
                <div className='hero-title mb-[5rem] mt-[-10rem] text-right'>
                    <h1 className='mb-4 max-w-md text-6xl font-thin'>
                        Home made{" "}
                        <span className='font-semibold text-green-600'>
                            healthy
                        </span>{" "}
                        food
                    </h1>
                    <h6 className='text-gray-500'>
                        Find your favorite food and order in seconds
                    </h6>
                </div>
                <div className='hero-search-section box-border'>
                    <div className='search-container flex items-center'>
                        <div className='search-box mr-3'>
                            <input
                                className='w-[500px] pt-2 pb-2'
                                type='text'
                                placeholder='Enter a food name or location'
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />
                        </div>
                        <div className='search-btn'>
                            <Link href='/allfoods'>
                                <button className='box-border bg-[#004945] pt-[8.8px] pb-[9px] pl-5 pr-5 text-base font-medium text-[white]'>
                                    Find
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

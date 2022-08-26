import Image from "next/image";
import { useTranslation } from "next-i18next";

const LandingMeals = () => {
    const { t } = useTranslation("landing-meals");

    return (
        <div className='m-14 grid md:grid-cols-6 '>
            <div className='md:col-span-1 '>
                <nav>
                    <div>
                        <div className='mt-[-14px] flex justify-center'>
                            <input
                                className='rounded-xl  font-semibold hover:font-bold'
                                type='search'
                                placeholder={t("search")}
                                name='search'
                            />
                        </div>
                        <h1 className='flex justify-center pt-8 font-bold'>
                            {t("categories")}
                        </h1>
                        <ul className='flex flex-col items-center'>
                            <li className='font-sans'>item 1</li>
                            <li>item 2</li>
                            <li>item 3</li>
                            <li>item 4</li>
                            <li>item 5</li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className='md:col-span-5  '>
                <div className='m-16 mt-8 grid gap-10 md:grid-cols-3'>
                    <div className='card relative'>
                        <Image
                            src='/images/meat.jpg'
                            width='500'
                            height='300'
                            alt='meatball'
                        />
                        <span className='m-4 text-sm font-bold md:text-base '>
                            Spanish Paella{" "}
                        </span>
                        <div className='flex items-center '>
                            <div className='flex items-center p-2  md:w-11'>
                                <Image
                                    src='/images/Avatar.png'
                                    width='32'
                                    height='32'
                                    layout='intrinsic'
                                    alt='chef'
                                />
                            </div>
                            <span className='text-grey-500 text-xs md:text-sm'>
                                Jennifer Lawrence
                            </span>
                        </div>
                        <div className='absolute top-0 ml-2 mt-2 rounded-full bg-stone-50 px-4 text-sm text-gray-600 text-opacity-80 opacity-100'>
                            {" "}
                            <span>60 tl</span>
                        </div>
                    </div>
                    <div className='card relative'>
                        <Image
                            src='/images/meat.jpg'
                            width='500'
                            height='300'
                            alt='meatball'
                        />
                        <span className='m-4 text-sm font-bold md:text-base'>
                            Spanish Paella{" "}
                        </span>
                        <div className='flex items-center '>
                            <div className='flex items-center p-2  md:w-11'>
                                <Image
                                    src='/images/Avatar.png'
                                    width='32'
                                    height='32'
                                    layout='intrinsic'
                                    alt='chef'
                                />
                            </div>
                            <span className='text-grey-500 text-xs md:text-sm'>
                                Jennifer Lawrence
                            </span>
                        </div>
                        <div className='absolute top-0 ml-2 mt-2 rounded-full bg-stone-50 px-4 text-sm text-gray-600 text-opacity-80 opacity-100'>
                            {" "}
                            <span>60 tl</span>
                        </div>
                    </div>
                    <div className='card relative'>
                        <Image
                            src='/images/meat.jpg'
                            width='500'
                            height='300'
                            alt='meatball'
                        />
                        <span className='m-4 text-sm font-bold md:text-base'>
                            Spanish Paella{" "}
                        </span>
                        <div className='flex items-center '>
                            <div className='flex items-center p-2  md:w-11'>
                                <Image
                                    src='/images/Avatar.png'
                                    width='32'
                                    height='32'
                                    layout='intrinsic'
                                    alt='chef'
                                />
                            </div>
                            <span className='text-grey-500 text-xs md:text-sm'>
                                Jennifer Lawrence
                            </span>
                        </div>
                        <div className='absolute top-0 ml-2 mt-2 rounded-full bg-stone-50 px-4 text-sm text-gray-600 text-opacity-80 opacity-100'>
                            {" "}
                            <span>60 tl</span>
                        </div>
                    </div>
                    <div className='card relative'>
                        <Image
                            src='/images/meat.jpg'
                            width='500'
                            height='300'
                            alt='meatball'
                        />
                        <span className='m-4 text-sm font-bold md:text-base'>
                            Spanish Paella{" "}
                        </span>
                        <div className='flex items-center '>
                            <div className='flex items-center p-2  md:w-11'>
                                <Image
                                    src='/images/Avatar.png'
                                    width='32'
                                    height='32'
                                    layout='intrinsic'
                                    alt='chef'
                                />
                            </div>
                            <span className='text-grey-500 text-xs md:text-sm'>
                                Jennifer Lawrence
                            </span>
                        </div>
                        <div className='absolute top-0 ml-2 mt-2 rounded-full bg-stone-50 px-4 text-sm text-gray-600 text-opacity-80 opacity-100'>
                            {" "}
                            <span>60 tl</span>
                        </div>
                    </div>
                    <div className='card relative'>
                        <Image
                            src='/images/meat.jpg'
                            width='500'
                            height='300'
                            alt='meatball'
                        />
                        <span className='m-4 text-sm font-bold md:text-base'>
                            Spanish Paella{" "}
                        </span>
                        <div className='flex items-center '>
                            <div className='flex items-center p-2  md:w-11'>
                                <Image
                                    src='/images/Avatar.png'
                                    width='32'
                                    height='32'
                                    layout='intrinsic'
                                    alt='chef'
                                />
                            </div>
                            <span className='text-grey-500 text-xs md:text-sm'>
                                Jennifer Lawrence
                            </span>
                        </div>
                        <div className='absolute top-0 ml-2 mt-2 rounded-full bg-stone-50 px-4 text-sm text-gray-600 text-opacity-80 opacity-100'>
                            {" "}
                            <span>60 tl</span>
                        </div>
                    </div>
                    <div className='card relative'>
                        <Image
                            src='/images/meat.jpg'
                            width='500'
                            height='300'
                            alt='meatball'
                        />
                        <span className='m-4 text-sm font-bold md:text-base'>
                            Spanish Paella{" "}
                        </span>
                        <div className='flex items-center '>
                            <div className='flex items-center p-2  md:w-11'>
                                <Image
                                    src='/images/Avatar.png'
                                    width='32'
                                    height='32'
                                    layout='intrinsic'
                                    alt='chef'
                                />
                            </div>
                            <span className='text-grey-500 text-xs md:text-sm'>
                                Jennifer Lawrence
                            </span>
                        </div>
                        <div className='absolute top-0 ml-2 mt-2 rounded-full bg-stone-50 px-4 text-sm text-gray-600 text-opacity-80 opacity-100'>
                            {" "}
                            <span>60 tl</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LandingMeals;

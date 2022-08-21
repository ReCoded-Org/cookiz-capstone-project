import Image from "next/image";
import { useTranslation } from "next-i18next";

const LandingMeals = () => {
    const { t } = useTranslation("landing-meals");

    return (
        <div className='md:grid-cols-6 m-14 grid '>
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
                <div className='md:grid-cols-3 m-16 mt-8 grid gap-10'>
                    <div className='card'>
                        <Image
                            src='/images/meat.jpg'
                            width='500'
                            height='300'
                            alt='meatball'
                        />
                        <span className='md:text-base m-4 text-sm font-bold '>
                            Spanish Paella{" "}
                        </span>
                        <div className='flex items-center '>
                            <div className='md:w-11 flex items-center  p-2'>
                                <Image
                                    src='/images/Avatar.png'
                                    width='32'
                                    height='32'
                                    layout='intrinsic'
                                    alt='chef'
                                />
                            </div>
                            <span className='text-grey-500 md:text-sm text-xs'>
                                Jennifer Lawrence
                            </span>
                        </div>
                        <div className=' badge'>
                            {" "}
                            <span>60 tl</span>
                        </div>
                    </div>
                    <div className='card'>
                        <Image
                            src='/images/meat.jpg'
                            width='500'
                            height='300'
                            alt='meatball'
                        />
                        <span className='md:text-base m-4 text-sm font-bold'>
                            Spanish Paella{" "}
                        </span>
                        <div className='flex items-center '>
                            <div className='md:w-11 flex items-center  p-2'>
                                <Image
                                    src='/images/Avatar.png'
                                    width='32'
                                    height='32'
                                    layout='intrinsic'
                                    alt='chef'
                                />
                            </div>
                            <span className='text-grey-500 md:text-sm text-xs'>
                                Jennifer Lawrence
                            </span>
                        </div>
                        <div className='badge'>
                            {" "}
                            <span>60 tl</span>
                        </div>
                    </div>
                    <div className='card'>
                        <Image
                            src='/images/meat.jpg'
                            width='500'
                            height='300'
                            alt='meatball'
                        />
                        <span className='md:text-base m-4 text-sm font-bold'>
                            Spanish Paella{" "}
                        </span>
                        <div className='flex items-center '>
                            <div className='md:w-11 flex items-center  p-2'>
                                <Image
                                    src='/images/Avatar.png'
                                    width='32'
                                    height='32'
                                    layout='intrinsic'
                                    alt='chef'
                                />
                            </div>
                            <span className='text-grey-500 md:text-sm text-xs'>
                                Jennifer Lawrence
                            </span>
                        </div>
                        <div className='badge'>
                            {" "}
                            <span>60 tl</span>
                        </div>
                    </div>
                    <div className='card'>
                        <Image
                            src='/images/meat.jpg'
                            width='500'
                            height='300'
                            alt='meatball'
                        />
                        <span className='md:text-base m-4 text-sm font-bold'>
                            Spanish Paella{" "}
                        </span>
                        <div className='flex items-center '>
                            <div className='md:w-11 flex items-center  p-2'>
                                <Image
                                    src='/images/Avatar.png'
                                    width='32'
                                    height='32'
                                    layout='intrinsic'
                                    alt='chef'
                                />
                            </div>
                            <span className='text-grey-500 md:text-sm text-xs'>
                                Jennifer Lawrence
                            </span>
                        </div>
                        <div className='badge'>
                            {" "}
                            <span>60 tl</span>
                        </div>
                    </div>
                    <div className='card'>
                        <Image
                            src='/images/meat.jpg'
                            width='500'
                            height='300'
                            alt='meatball'
                        />
                        <span className='md:text-base m-4 text-sm font-bold'>
                            Spanish Paella{" "}
                        </span>
                        <div className='flex items-center '>
                            <div className='md:w-11 flex items-center  p-2'>
                                <Image
                                    src='/images/Avatar.png'
                                    width='32'
                                    height='32'
                                    layout='intrinsic'
                                    alt='chef'
                                />
                            </div>
                            <span className='text-grey-500 md:text-sm text-xs'>
                                Jennifer Lawrence
                            </span>
                        </div>
                        <div className='badge'>
                            {" "}
                            <span>60 tl</span>
                        </div>
                    </div>
                    <div className='card'>
                        <Image
                            src='/images/meat.jpg'
                            width='500'
                            height='300'
                            alt='meatball'
                        />
                        <span className='md:text-base m-4 text-sm font-bold'>
                            Spanish Paella{" "}
                        </span>
                        <div className='flex items-center '>
                            <div className='md:w-11 flex items-center  p-2'>
                                <Image
                                    src='/images/Avatar.png'
                                    width='32'
                                    height='32'
                                    layout='intrinsic'
                                    alt='chef'
                                />
                            </div>
                            <span className='text-grey-500 md:text-sm text-xs'>
                                Jennifer Lawrence
                            </span>
                        </div>
                        <div className='badge'>
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

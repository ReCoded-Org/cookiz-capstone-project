import Image from "next/image";
import { useTranslation } from "next-i18next";

const Cards = () => {
    const { t } = useTranslation("cards");
    return (
        <div className='mt-20 ml-10 flex flex-col items-center justify-center md:ml-0'>
            {/* title part */}

            <div className='m-auto flex flex-col'>
                <div className=' flex  flex-col'>
                    <p className=' text-3xl font-bold text-black'>
                        {t("card-title")}
                    </p>
                    <p className=' pb-12  pt-2 text-xl   text-black'>
                        {t("card-subtitle")}
                    </p>
                </div>

                <div className='mb-4  flex flex-row  flex-wrap justify-between gap-16'>
                    <div className='max-h-sm flex max-w-sm flex-row items-center justify-center  rounded-[10px] bg-[#9EE2B8]  shadow-lg '>
                        <div className='basis-2/3 p-5'>
                            <div>
                                <Image
                                    alt='y'
                                    src='/images/cheff.png'
                                    height={50}
                                    width={50}
                                />
                            </div>
                            <div className='text-xl font-semibold text-black  sm:text-2xl lg:text-3xl'>
                                {t("card1-text")}
                            </div>
                            <div>
                                <Image
                                    alt='l'
                                    src='/images/soup.png'
                                    height={50}
                                    width={50}
                                />
                            </div>
                        </div>
                        <img
                            src='/images/chef.png'
                            alt='cart'
                            className='h-full w-1/2 rounded-r-lg'
                        />
                    </div>

                    <div className='max-h-sm  flex max-w-sm flex-row rounded-[10px] bg-[#FFE7E3] shadow-lg '>
                        <div className='flex basis-2/3 flex-col justify-center gap-4 px-6 pt-12 '>
                            <p className='text-xl font-semibold text-black  sm:text-2xl lg:text-3xl'>
                                {t("card2-text")}
                            </p>
                            <button className='mb-10 box-border h-10 w-32 bg-green-900'>
                                <span className='h-5 w-20  text-sm font-bold leading-5 text-white sm:text-lg'>
                                    {t("card2-btn")}
                                </span>
                            </button>
                        </div>
                        <div className='w-64'>
                            <img
                                src='/images/basket.png'
                                alt='cart'
                                className='h-full rounded-r-lg'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;

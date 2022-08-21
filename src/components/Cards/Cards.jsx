import Image from "next/image";
import { useTranslation } from "next-i18next";

const Cards = () => {
    const { t } = useTranslation("cards");

    return (
        <div className='md:ml-0 mt-20 ml-10 flex flex-col items-center justify-center'>
            {/* title part */}
            <div className='bflex m-auto flex-col'>
                <div className=' flex  flex-col'>
                    <p className=' md:text-3xl text-2xl font-bold text-black'>
                        {t("card-title")}
                    </p>
                    <p className=' pb-12  pt-2 font-normal   text-black'>
                        {t("card-subtitle")}
                    </p>
                </div>

                <div className='flex w-full flex-row flex-wrap  justify-between gap-24'>
                    <div className='flex   h-[17.813rem] w-[34.375] flex-row items-center justify-center rounded-[12px] bg-[#9EE2B8] shadow-lg '>
                        <div className='flex flex-col px-6 '>
                            <div>
                                <Image
                                    src='/images/cheff.png'
                                    width={36}
                                    height={36}
                                    layout='intrinsic'
                                    alt='x'
                                />
                            </div>
                            <div className=' md:text-3xl h-40 w-[307px] text-2xl font-semibold text-black'>
                                {t("card1-text")}
                                <div>
                                    <Image
                                        src='/images/soup.png'
                                        width={36}
                                        height={36}
                                        layout='intrinsic'
                                        alt='x'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='h-[17.8rem] w-full  overflow-hidden rounded-r-lg '>
                            <Image
                                src='/images/chef.png'
                                width={200}
                                height={284}
                                layout='intrinsic'
                                alt='x'
                            />
                        </div>
                    </div>
                    <div className='flex   h-[17.813rem] w-[34.375] flex-row rounded-[12px] bg-[#FFE7E3] shadow-lg '>
                        <div className='flex  flex-col justify-center gap-7 px-6 '>
                            <p className='  md:pt-12   md:text-3xl   w-[310px] text-2xl font-semibold text-black'>
                                {t("card2-text")}{" "}
                            </p>
                            <button className='  box-border  h-10 w-32 bg-green-900 '>
                                <span className='h-5 w-20  text-base font-bold leading-5 text-white'>
                                    {t("card2-btn")}
                                </span>
                            </button>
                        </div>
                        <div className='h-[17.8rem] w-full  overflow-hidden rounded-r-lg '>
                            <Image
                                src='/images/basket.png'
                                width={200}
                                height={284}
                                layout='intrinsic'
                                alt='x'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;

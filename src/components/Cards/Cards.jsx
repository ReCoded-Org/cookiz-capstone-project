import Image from "next/image";
const Cards = () => {
    return (
        <div className='mt-20 ml-10 flex flex-col items-center justify-center md:ml-0'>
            {/* title part */}
            <div className='bflex m-auto flex-col'>
                <div className=' flex  flex-col'>
                    <p className=' text-2xl font-bold text-black md:text-3xl'>
                        You’ve missed home made food?
                    </p>
                    <p className=' pb-12  pt-2 font-normal   text-black'>
                        Pick your favorite chef, food or cousin.
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
                            <div className=' h-40 w-[307px] text-2xl font-semibold text-black md:text-3xl'>
                                Pick your chef order the food and get it when
                                you want
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
                            <p className='  w-[310px]   text-2xl   font-semibold text-black md:pt-12 md:text-3xl'>
                                Get a 15% discount for your first order!
                            </p>
                            <button className='  box-border  h-10 w-32 bg-green-900 '>
                                <span className='h-5 w-20  text-base font-bold leading-5 text-white'>
                                    Order Now
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

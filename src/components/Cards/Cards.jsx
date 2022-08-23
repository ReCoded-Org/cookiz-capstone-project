import Image from "next/image";
const Cards = () => {
    return (
        <div className='mt-20 ml-10 flex flex-col items-center justify-center md:ml-0'>
            {/* title part */}

            <div className='m-auto flex flex-col'>
                <div className=' flex  flex-col'>
                    <p className=' text-3xl font-bold text-black'>
                        You’ve missed home made food?
                    </p>
                    <p className=' pb-12  pt-2 text-xl   text-black'>
                        Pick your favorite chef, food or cousin.
                    </p>
                </div>

                <div className='mb-4  flex flex-row  flex-wrap justify-between gap-16'>
                    <div className='flex h-[350px]  w-[660px] flex-row items-center  justify-center rounded-[10px]  bg-[#9EE2B8] shadow-lg'>
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
                                {" "}
                                Pick your chef order the food and get it when
                                you want
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
                        <div className='flex items-center justify-center'>
                            <Image
                                alt='t'
                                src='/images/chef.png'
                                height={355}
                                width={225}
                                className='rounded-r-xl'
                            />
                        </div>
                    </div>

                    <div className='flex  h-[350px] w-[660px] flex-row rounded-[10px] bg-[#FFE7E3] shadow-lg '>
                        <div className='flex basis-2/3 flex-col justify-center gap-4 px-6 pt-12 '>
                            <p className='text-xl font-semibold text-black  sm:text-2xl lg:text-3xl'>
                                Get a 15% discount for your first order!
                            </p>
                            <button className='  box-border  h-10 w-32 bg-green-900 '>
                                <span className='h-5 w-20  text-sm font-bold leading-5 text-white sm:text-lg'>
                                    Order Now
                                </span>
                            </button>
                        </div>
                        <div>
                            <Image
                                src='/images/basket.png'
                                alt='x'
                                height={355}
                                width={225}
                                className='overflow-hidden rounded-r-lg '
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;

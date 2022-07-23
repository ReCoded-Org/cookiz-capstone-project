const SearchCities = () => {
    return (
        <div className='flex flex-row justify-center'>
            <div className='flex flex-col items-center gap-6 px-8 py-6 '>
                <p className='text-center  text-xl font-bold md:text-3xl'>
                    Places where Cookiez is available
                </p>
                <p className='text-center text-sm font-normal md:text-base'>
                    We are currently providing services for limited cities. We
                    plan to expand services across whole country very soon.
                </p>

                <div className='w-2/3 '>
                    <div className='flex flex-row justify-between space-x-3'>
                        <div className='form-group w-full'>
                            <input
                                type='text'
                                className=' w-full p-3 font-normal focus-within:border-[#004945] focus:ring-[#004945]'
                                placeholder='Enter a city name'
                                required
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SearchCities;

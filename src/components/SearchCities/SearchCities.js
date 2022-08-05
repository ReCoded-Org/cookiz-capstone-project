import { useState } from "react";

const SearchCities = () => {
    const [city, setCity] = useState("");
    return (
        <div className='flex flex-row justify-center'>
            <div className='flex flex-col items-center gap-6 px-8 py-6 '>
                <p className='md:text-3xl  text-center text-xl font-bold'>
                    Places where Cookiez is available
                </p>
                <p className='md:text-base text-center text-sm font-normal'>
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
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
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

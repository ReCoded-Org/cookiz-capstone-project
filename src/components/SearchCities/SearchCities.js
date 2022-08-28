import { useTranslation } from "next-i18next";
import { useState } from "react";

const SearchCities = () => {
    const { t } = useTranslation("search-cities");

    const [city, setCity] = useState("");
    return (
        <div className='flex flex-row justify-center'>
            <div className='flex flex-col items-center gap-6 px-8 py-8 '>
                <p className='text-center  text-4xl font-bold'>{t("title")}</p>
                <p className='text-center text-2xl font-normal'>{t("text")}</p>

                <div className='w-2/3 '>
                    <div className='flex flex-row justify-between space-x-3'>
                        <div className='form-group w-full'>
                            <input
                                type='text'
                                className=' w-full p-3 text-2xl font-normal focus-within:border-[#004945] focus:ring-[#004945]'
                                placeholder={t("placeholder")}
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

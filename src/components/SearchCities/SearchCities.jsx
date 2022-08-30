import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useState } from "react";

const SearchCities = () => {
    const { t } = useTranslation("search-cities");

    const [city, setCity] = useState("");

    // intializing router
    const router = useRouter();

    // redirect handler
    const handleRedirect = (event, PATH) => {
        event.preventDefault();
        router.push(PATH);
    };

    return (
        <div className='flex flex-row justify-center'>
            <div className='flex flex-col items-center gap-6 px-8 py-8 '>
                <p className='text-center  text-4xl font-bold'>{t("title")}</p>
                <p className='text-center text-2xl font-normal'>{t("text")}</p>

                <div className='w-2/3 '>
                    <div className='flex flex-row justify-between space-x-3'>
                        <div className='form-group flex w-full flex-row gap-3'>
                            <input
                                type='text'
                                className=' w-full p-3 text-2xl font-normal focus-within:border-[#004945] focus:ring-[#004945]'
                                placeholder={t("placeholder")}
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                            <button
                                className='w-[200px] bg-primary pt-6 pb-6 text-[24px] text-white hover:bg-green-700'
                                onClick={(e) => {
                                    if (city != "") {
                                        handleRedirect(e, "/LandingMeal");
                                    } else {
                                        console.log(
                                            "Enter a food name or location"
                                        );
                                    }
                                }}
                            >
                                Enter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SearchCities;

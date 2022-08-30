import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

function Hero() {
    const [search, setSearch] = useState("");
    const { t } = useTranslation("hero");

    useEffect(() => {}, [search]);

    // intializing router
    const router = useRouter();

    // redirect handler
    const handleRedirect = (event, PATH) => {
        event.preventDefault();
        router.push(PATH);
    };

    return (
        <section className='hero-container mb-[10rem] flex h-screen items-center bg-herobg bg-cover pl-[10rem]'>
            <div className='wrapper flex h-[30vw] w-auto max-w-[1920px] flex-col justify-center p-[2rem]'>
                <div className='hero-title mb-[3rem] mt-[-10rem]'>
                    <h1 className='max-w-[35vw] text-[5rem] font-bold leading-[1] text-orange-700'>
                        {t("title")}
                    </h1>
                </div>
                <div className='hero-search-section box-border'>
                    <div className='search-container mb-[2rem] flex flex-wrap items-center'>
                        {/* search input */}
                        <div className='search-box mr-3'>
                            <input
                                className='pt-6 pb-6 text-[24px] sm:w-96'
                                type='text'
                                placeholder={t("placeholder")}
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />
                        </div>
                        <div className='search-btn'>
                            <button
                                onClick={(e) => {
                                    if (search != "") {
                                        handleRedirect(e, "/LandingMeal");
                                    } else {
                                        console.log(
                                            "Enter a food name or location"
                                        );
                                    }
                                }}
                                className='box-border bg-yellow-600 px-10 py-[23px] text-[24px] font-medium text-[white] hover:bg-yellow-700'
                            >
                                {t("search-button")}
                            </button>
                        </div>
                    </div>
                    <h6 className='pl-[10px] text-[0.9vw] text-gray-800'>
                        {t("subtitle")}
                    </h6>
                </div>
            </div>
        </section>
    );
}

export default Hero;

import Link from "next/link";
import { useTranslation } from "next-i18next";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
    const { t } = useTranslation("footer");
    return (
        <>
            <footer className='footer w-auto bg-black pt-[5rem] pb-[5rem] pl-[4rem] pr-[4rem] font-opensans text-[1.5rem] text-white'>
                <div className='footer-wrapper mb-[8rem] flex justify-between'>
                    <div className='footer-logo w-[50%]'>
                        <div className='logo mb-[2rem] text-[3rem] font-bold uppercase'>
                            <Link href='#'>
                                <a>
                                    cook<span className='font-thin'>iez</span>
                                </a>
                            </Link>
                        </div>
                        <div className='footer-icons flex gap-[3rem] text-[2rem]'>
                            <BsInstagram />
                            <BsTwitter />
                            <BsFacebook />
                        </div>
                    </div>

                    <div className='footer-navigation flex w-[50%] items-center justify-around'>
                        <div className='nav-links_left'>
                            <ul>
                                <li className='mb-3 hover:underline'>
                                    <Link href='#'>
                                        <a>{t("help")}</a>
                                    </Link>
                                </li>
                                <li className='mb-3 hover:underline'>
                                    <Link href='#'>
                                        <a>{t("chef")}</a>
                                    </Link>
                                </li>
                                <li className='mb-3 hover:underline'>
                                    <Link href='#'>
                                        <a>{t("promotions")}</a>
                                    </Link>
                                </li>
                                <li className='mb-3 hover:underline'>
                                    <Link href='#'>
                                        <a>{t("about")}</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='nav-links_right'>
                            <ul>
                                <li className='mb-3 hover:underline'>
                                    <Link href='#'>
                                        <a>{t("chef-around")}</a>
                                    </Link>
                                </li>
                                <li className='mb-3 hover:underline'>
                                    <Link href='#'>
                                        <a>{t("view-foods")}</a>
                                    </Link>
                                </li>
                                <li className='mb-3 hover:underline'>
                                    <Link href='#'>
                                        <a>{t("view-cities")}</a>
                                    </Link>
                                </li>
                                <li className='mb-3 hover:underline'>
                                    <Link href='#'>
                                        <a>{t("view-chefs")}</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='copyright text-center text-[1rem] font-normal'>
                    {t("copyright")}
                </div>
            </footer>
        </>
    );
};

export default Footer;

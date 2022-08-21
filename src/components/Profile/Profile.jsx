import Link from "next/link";
import { useTranslation } from "next-i18next";

function Profile({ children }) {
    const { t } = useTranslation("profile");

    return (
        <div className='dashboard flex h-screen w-auto font-opensans'>
            <div className='sidebar w-[15%] border-r-[1px] pt-[1.5rem] pb-[1.5rem]'>
                <div className='dash-title mb-10 border-b-[1px]'>
                    <div className='logo-wrapper mb-[7rem] pl-8'>
                        <div className='logo text-2xl tablet:text-xl'>
                            <Link href='#'>
                                <a>
                                    <span className='font-black'>COOK</span>IEZ
                                </a>
                            </Link>
                        </div>
                        <div className='sub-title'>
                            <span className='text-base text-gray-500'>
                                {t("profile")}
                            </span>
                        </div>
                    </div>
                    <div className='dash-user mb-4 flex items-center gap-4 pl-8'>
                        <div className='user-img h-[75px] w-[75px] overflow-hidden rounded-full border-2'></div>
                        <div className='user-id font-medium'>
                            Jannifer Lawrence
                        </div>
                    </div>
                </div>

                <div className='dash-nav pl-8'>
                    <ul className='flex flex-col gap-5'>
                        <li>
                            <Link href='#'>
                                <a>{t("listed-foods")}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a>{t("orders")}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a>{t("payment-settings")}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a>{t("edit-profile")}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a> {t("logout")}</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='dash-content w-[85%]'>{children}</div>
        </div>
    );
}

export default Profile;

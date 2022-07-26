import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useReducer } from "react";

import EditAccount from "../EditAccount/EditAccount";
import Orders from "../Orders/Orders";

function reducer(state, action) {
    if (action.type === "foods") {
        return [null];
    }
    if (action.type === "orders") {
        return <Orders />;
    }
    if (action.type === "editProfile") {
        return <EditAccount />;
    }
    throw Error("Unknown action.");
}

function Profile() {
    const [state, dispatch] = useReducer(reducer, <EditAccount />);
    const { t } = useTranslation("profile");

    return (
        <div className='dashboard flex h-screen w-auto font-opensans'>
            <div className='sidebar w-[15%] border-r-[1px] pt-[1.5rem] pb-[1.5rem]'>
                <div className='dash-title mb-10 border-b-[1px]'>
                    <div className='logo-wrapper mb-[7rem] pl-8'>
                        <div className='logo tablet:text-xl text-2xl'>
                            <Link href='/'>
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
                            <div
                                href='#'
                                onClick={() => {
                                    dispatch({ type: "editProfile" });
                                }}
                            >
                                <a>Foods</a>
                            </div>
                        </li>
                        <li>
                            <div
                                href='#'
                                onClick={() => {
                                    dispatch({ type: "orders" });
                                }}
                            >
                                <a>Orders</a>
                            </div>
                        </li>
                        <li>
                            <div
                                onClick={() => {
                                    dispatch({ type: "editProfile" });
                                }}
                            >
                                <a>Edit profile</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='dash-content w-[85%]'>{state}</div>
        </div>
    );
}

export default Profile;

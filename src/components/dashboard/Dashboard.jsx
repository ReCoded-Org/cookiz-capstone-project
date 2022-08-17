import Link from "next/link";

function Dashboard() {
    return (
        <div className='dashboard flex h-screen w-auto font-opensans'>
            <div className='sidebar w-[15%] border-r-[1px] pt-[1.5rem] pb-[1.5rem]'>
                <div className='dash-title mb-10 border-b-[1px]'>
                    <div className='logo-wrapper mb-[7rem] pl-8'>
                        <div className='logo tablet:text-xl text-2xl'>
                            <Link href='#'>
                                <a>
                                    <span className='font-black'>COOK</span>IEZ
                                </a>
                            </Link>
                        </div>
                        <div className='sub-title'>
                            <span className='text-base text-gray-500'>
                                Dashboard
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
                                <a>Listed foods</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a>Orders</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a>Payment settings</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a>Customer reviews</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a>Logout</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='dash-content w-[85%]'>
                {/* dashboard components will be rendered in this section */}
            </div>
        </div>
    );
}

export default Dashboard;

import {
    BiCalendar,
    BiNotepad,
    BiPackage,
    BiSearch,
    BiWallet,
} from "react-icons/bi";

const Orders = () => {
    return (
        <div className=' flex h-screen'>
            <div className='w-full pt-7 pl-4 sm:pl-12'>
                <div className='flex items-center justify-items-center gap-3 text-4xl  sm:text-6xl'>
                    <BiNotepad />
                    <p>Orders</p>
                </div>
                <div className='mt-8 flex w-full items-center justify-items-center gap-2 sm:gap-4'>
                    <div className='flex h-24 w-1/4 flex-col items-start justify-center gap-4  rounded-lg border-l-4 border-l-[#ABD0AC] bg-[#DFECE0] pl-4 sm:h-40'>
                        <p className='text-sm text-[#707070] sm:text-xl'>
                            Total orders
                        </p>
                        <p className='text-base sm:text-3xl'>
                            <b>135</b>
                        </p>
                    </div>
                    <div className='flex h-24  w-1/4 flex-col items-start justify-center gap-4 rounded-lg border-l-4 border-l-[#E1CDB4]  bg-[#FEEDD8] pl-4 sm:h-40'>
                        <p className='text-sm text-[#707070] sm:text-xl'>
                            Revenue
                        </p>
                        <p className='text-base sm:text-3xl'>
                            <b>450$</b>
                        </p>
                    </div>
                    <div className='flex h-24 w-1/4 flex-col items-start justify-center gap-4 rounded-lg border-l-4 border-l-[#BBCDE1] bg-[#E2EDF9] pl-4 sm:h-40'>
                        <p className='text-sm text-[#707070] sm:text-xl'>
                            Popular Order
                        </p>
                        <p className='text-base sm:text-3xl'>
                            <b>Fried Chips</b>
                        </p>
                    </div>
                </div>
                <p className='mt-8  text-2xl font-bold'>Filter</p>
                <div className='mt-4 flex items-center justify-start gap-2 sm:gap-4'>
                    <div className='flex items-center justify-center gap-3 rounded border-2 border-[#004945] p-2 text-xs text-[#004945] sm:text-xl'>
                        <BiSearch />
                        <p>Search by food name</p>
                    </div>
                    <div className='flex items-center justify-center gap-3 rounded border-2 border-[#004945] p-2 text-xs text-[#004945] sm:text-xl'>
                        <BiCalendar />
                        <p>Date range</p>
                    </div>
                    <div className='flex items-center justify-center gap-3 rounded border-2 border-[#004945] p-2 text-xs text-[#004945]  sm:text-xl'>
                        <BiPackage />
                        <p>Status</p>
                    </div>
                    <div className='flex items-center justify-center gap-3 rounded border-2 border-[#004945] p-2 text-xs text-[#004945] sm:text-xl'>
                        <BiWallet />
                        <p>Payment Method</p>
                    </div>
                </div>
                <div className='flex w-full flex-col'>
                    <div className='justify-stretch sm:gap-26 mt-6 flex  h-10 w-5/6 items-center gap-6 bg-[#F6F6F6] pl-4  text-base font-semibold sm:font-bold'>
                        <p>DATE</p>
                        <p>CUSTOMER</p>
                        <p>FOOD</p>
                        <p>STATUS</p>
                        <p>PAYMENT</p>
                        <p>PRICE</p>
                    </div>
                    <div className='flex w-5/6 items-center justify-start gap-4  bg-[#F6F6F6] py-8 pl-4  text-lg hover:bg-[#FFFDF3] sm:gap-24 sm:text-xl'>
                        <div className='flex flex-col'>
                            <p>01/02/2022</p>
                            <p>16:00</p>
                        </div>
                        <div>
                            <p>Brad Pitt</p>
                        </div>
                        <div>
                            <p>Sausage</p>
                        </div>
                        <div>
                            <p>Preparing</p>
                        </div>
                        <div className='sm:w-32'>
                            <p>Credit Card</p>
                        </div>
                        <div>
                            <p>5</p>
                        </div>
                    </div>
                    <div className='flex w-5/6  items-center justify-start gap-4  bg-[#F6F6F6] py-8 pl-4  text-lg hover:bg-[#FFFDF3] sm:gap-24 sm:text-xl'>
                        <div className='flex flex-col'>
                            <p>01/02/2022</p>
                            <p>16:00</p>
                        </div>
                        <div>
                            <p>Brad Pitt</p>
                        </div>
                        <div>
                            <p>Sausage</p>
                        </div>
                        <div>
                            <p>Preparing</p>
                        </div>
                        <div className='sm:w-32'>
                            <p>Credit Card</p>
                        </div>
                        <div>
                            <p>5</p>
                        </div>
                    </div>
                    <div className='flex w-5/6  items-center justify-start gap-4  bg-[#F6F6F6] py-8 pl-4  text-lg hover:bg-[#FFFDF3] sm:gap-24 sm:text-xl'>
                        <div className='flex flex-col'>
                            <p>01/02/2022</p>
                            <p>16:00</p>
                        </div>
                        <div>
                            <p>Brad Pitt</p>
                        </div>
                        <div>
                            <p>Sausage</p>
                        </div>
                        <div>
                            <p>Preparing</p>
                        </div>
                        <div className='sm:w-32'>
                            <p>Credit Card</p>
                        </div>
                        <div>
                            <p>5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;

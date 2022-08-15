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
            <div className='sm:pl-12 w-full pt-7 pl-4'>
                <div className='sm:text-6xl flex items-center justify-items-center gap-3  text-4xl'>
                    <BiNotepad />
                    <p>Orders</p>
                </div>
                <div className='sm:gap-4 mt-8 flex w-full items-center justify-items-center gap-2'>
                    <div className='sm:h-40 flex h-24 w-1/4 flex-col items-start justify-center  gap-4 rounded-lg border-l-4 border-l-[#ABD0AC] bg-[#DFECE0] pl-4'>
                        <p className='sm:text-xl text-sm text-[#707070]'>
                            Total orders
                        </p>
                        <p className='sm:text-3xl text-base'>
                            <b>135</b>
                        </p>
                    </div>
                    <div className='sm:h-40 flex  h-24 w-1/4 flex-col items-start justify-center gap-4 rounded-lg border-l-4  border-l-[#E1CDB4] bg-[#FEEDD8] pl-4'>
                        <p className='sm:text-xl text-sm text-[#707070]'>
                            Revenue
                        </p>
                        <p className='sm:text-3xl text-base'>
                            <b>450$</b>
                        </p>
                    </div>
                    <div className='sm:h-40 flex h-24 w-1/4 flex-col items-start justify-center gap-4 rounded-lg border-l-4 border-l-[#BBCDE1] bg-[#E2EDF9] pl-4'>
                        <p className='sm:text-xl text-sm text-[#707070]'>
                            Popular Order
                        </p>
                        <p className='sm:text-3xl text-base'>
                            <b>Fried Chips</b>
                        </p>
                    </div>
                </div>
                <p className='mt-8  text-2xl font-bold'>Filter</p>
                <div className='sm:gap-4 mt-4 flex items-center justify-start gap-2'>
                    <div className='sm:text-xl flex items-center justify-center gap-3 rounded border-2 border-[#004945] p-2 text-xs text-[#004945]'>
                        <BiSearch />
                        <p>Search by food name</p>
                    </div>
                    <div className='sm:text-xl flex items-center justify-center gap-3 rounded border-2 border-[#004945] p-2 text-xs text-[#004945]'>
                        <BiCalendar />
                        <p>Date range</p>
                    </div>
                    <div className='sm:text-xl flex items-center justify-center gap-3 rounded border-2 border-[#004945] p-2 text-xs  text-[#004945]'>
                        <BiPackage />
                        <p>Status</p>
                    </div>
                    <div className='sm:text-xl flex items-center justify-center gap-3 rounded border-2 border-[#004945] p-2 text-xs text-[#004945]'>
                        <BiWallet />
                        <p>Payment Method</p>
                    </div>
                </div>
                <div className='flex w-full flex-col'>
                    <div className='justify-stretch sm:gap-26 sm:font-bold mt-6  flex h-10 w-5/6 items-center gap-6 bg-[#F6F6F6]  pl-4 text-base font-semibold'>
                        <p>DATE</p>
                        <p>CUSTOMER</p>
                        <p>FOOD</p>
                        <p>STATUS</p>
                        <p>PAYMENT</p>
                        <p>PRICE</p>
                    </div>
                    <div className='sm:gap-24 sm:text-xl flex w-5/6 items-center  justify-start gap-4 bg-[#F6F6F6]  py-8 pl-4 text-lg hover:bg-[#FFFDF3]'>
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
                    <div className='sm:gap-24 sm:text-xl  flex w-5/6 items-center  justify-start gap-4 bg-[#F6F6F6]  py-8 pl-4 text-lg hover:bg-[#FFFDF3]'>
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
                    <div className='sm:gap-24 sm:text-xl  flex w-5/6 items-center  justify-start gap-4 bg-[#F6F6F6]  py-8 pl-4 text-lg hover:bg-[#FFFDF3]'>
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

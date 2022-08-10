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
            <div className='w-full pt-7 pl-12'>
                <div className='flex items-center justify-items-center gap-3 text-6xl'>
                    <BiNotepad />
                    <p>Orders</p>
                </div>
                <div className='mt-8 flex w-full items-center justify-items-center gap-4'>
                    <div className='flex h-40 w-1/4 flex-col items-start justify-center  gap-4 rounded-lg border-l-4 border-l-[#ABD0AC] bg-[#DFECE0] pl-4'>
                        <p className='text-xl text-[#707070]'>Total orders</p>
                        <p className='text-3xl'>
                            <b>135</b>
                        </p>
                    </div>
                    <div className='flex h-40 w-1/4 flex-col items-start justify-center gap-4 rounded-lg border-l-4  border-l-[#E1CDB4] bg-[#FEEDD8] pl-4'>
                        <p className='text-xl text-[#707070]'>Revenue</p>
                        <p className='text-3xl'>
                            <b>450$</b>
                        </p>
                    </div>
                    <div className='flex h-40 w-1/4 flex-col items-start justify-center gap-4 rounded-lg border-l-4 border-l-[#BBCDE1] bg-[#E2EDF9] pl-4'>
                        <p className='text-xl text-[#707070]'>Popular Order</p>
                        <p className='text-3xl'>
                            <b>Fried Chips</b>
                        </p>
                    </div>
                </div>
                <p className='mt-8 text-2xl font-bold'>Filter</p>
                <div className='mt-4 flex items-center justify-start gap-4'>
                    <div className='flex items-center justify-center gap-3 rounded border-2 border-[#004945] p-2 text-xl text-[#004945]'>
                        <BiSearch />
                        <p>Search by food name</p>
                    </div>
                    <div className='flex items-center justify-center gap-3 rounded border-2 border-[#004945] p-2 text-xl text-[#004945]'>
                        <BiCalendar />
                        <p>Date range</p>
                    </div>
                    <div className='flex items-center justify-center gap-3 rounded border-2 border-[#004945] p-2 text-xl text-[#004945]'>
                        <BiPackage />
                        <p>Status</p>
                    </div>
                    <div className='flex items-center justify-center gap-3 rounded border-2 border-[#004945] p-2 text-xl text-[#004945]'>
                        <BiWallet />
                        <p>Payment Method</p>
                    </div>
                </div>
                <div className='flex w-full flex-col'>
                    <div className='justify-stretch gap-26 mt-6 flex h-10 items-center gap-28 bg-[#F6F6F6] text-xl font-bold'>
                        <p>REF.</p>
                        <p>DATE</p>
                        <p>CUSTOMER</p>
                        <p>FOOD</p>
                        <p>STATUS</p>
                        <p>PAYMENT</p>
                        <p>PRICE</p>
                    </div>
                    <div className='flex items-center justify-start gap-24 bg-[#F6F6F6] py-8  text-xl hover:bg-[#FFFDF3]'>
                        <div>
                            <p className='font-bold'>UF234</p>
                        </div>
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
                        <div className='w-32'>
                            <p>Credit Card</p>
                        </div>
                        <div>
                            <p>5</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-start gap-24 bg-[#F6F6F6] py-8  text-xl hover:bg-[#FFFDF3]'>
                        <div>
                            <p className='font-bold'>UF234</p>
                        </div>
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
                            <p>Cancelled</p>
                        </div>
                        <div className='w-32'>
                            <p>Cash</p>
                        </div>
                        <div>
                            <p>5</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-start gap-24 bg-[#F6F6F6] py-8  text-xl hover:bg-[#FFFDF3]'>
                        <div>
                            <p className='font-bold'>UF234</p>
                        </div>
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
                        <div className='w-32'>
                            <p>Cash</p>
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

import { useState } from "react";
import { HiArrowSmLeft, HiArrowSmRight, HiPlusCircle } from "react-icons/hi";
import { IoAddCircleOutline, IoTrashBinOutline } from "react-icons/io5";
export default function AddMeal() {
    const imageUrl = "../images/header.jpg";
    const [dietary, setDietary] = useState([""]);

    function addRemoveDietary(dietaryName) {
        if (dietary.includes(dietaryName)) {
            for (let index = 0; index < dietary.length; index++) {
                if (dietaryName === dietary[index]) {
                    setDietary([
                        ...dietary.slice(0, index),
                        ...dietary.slice(index + 1, dietary.length),
                    ]);
                }
            }
        } else {
            setDietary(...dietary, dietaryName);
        }
    }

    return (
        <div className='flex h-fit w-[360px] flex-col items-start justify-start gap-3 overflow-hidden bg-red-200'>
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    // backgroundSize: "",
                    width: "100%",
                    border: "none",
                }}
                className='mx-0 mt-0 flex h-64 w-full items-center justify-center overflow-hidden bg-center bg-no-repeat'
            >
                <div className='flex items-center justify-between gap-28 text-white md:gap-80 lg:gap-y-96'>
                    <HiArrowSmLeft style={{ fontSize: "40px" }} />
                    <HiPlusCircle style={{ fontSize: "40px" }} />
                    <HiArrowSmRight style={{ fontSize: "40px" }} />
                </div>
            </div>

            <input
                type='text'
                placeholder='Fried Chips'
                className='ml-5 w-2/3 rounded border-none bg-[#00494533] text-center text-sm focus:ring-1 focus:ring-[#004945] lg:text-base'
                required
            />
            <p className='ml-3 text-sm lg:text-base'>Dietary</p>
            <div className='ml-5 flex w-full items-center justify-start gap-3'>
                <input
                    type='button'
                    value='Vegetarian'
                    className=' click:ring-2  w-1/4 rounded-full bg-[#00494533] p-2 text-center  text-xs text-zinc-800 lg:w-1/3 lg:text-sm'
                    onClick={(e) => {
                        addRemoveDietary(e.target.value);
                    }}
                />

                <input
                    type='button'
                    value='Vegan'
                    className=' click:ring-2 w-1/4  rounded-full bg-[#00494533] p-2 text-center text-xs  text-zinc-800 lg:w-1/3 lg:text-sm'
                    onClick={(e) => {
                        addRemoveDietary(e.target.value);
                    }}
                />
                <input
                    type='button'
                    value='Gluten Free'
                    className=' click:ring-2 w-1/4  rounded-full bg-[#00494533] p-2 text-center text-xs  text-zinc-800 lg:w-1/3 lg:text-sm'
                    onClick={(e) => {
                        addRemoveDietary(e.target.value);
                    }}
                />
            </div>
            <p className='ml-3 text-sm lg:text-base'>Ingredients</p>
            <div className='ml-5 flex w-full flex-col items-start justify-start gap-3'>
                <div className='relative w-1/3'>
                    <input
                        type='text'
                        placeholder='Tomatoes'
                        className=' w-full rounded-full border-none bg-[#00494533] p-2 text-start text-xs focus:ring-1 focus:ring-[#004945] lg:text-sm'
                    ></input>
                    <IoAddCircleOutline className='absolute top-2 right-0.5 w-10' />
                </div>

                <div className='flex w-full items-start justify-start gap-3'>
                    <div className=' relative w-1/3'>
                        <p className='w-full rounded-full border-none bg-[#00494533] p-2 text-start text-xs text-zinc-800 lg:text-sm'>
                            Cucumber
                        </p>
                        <IoTrashBinOutline className='absolute top-2 right-0.5 w-10' />
                    </div>
                    <div className=' relative w-1/3'>
                        <p className='w-full rounded-full border-none bg-[#00494533] p-2 text-start text-xs text-zinc-800 lg:text-sm'>
                            Cucumber
                        </p>
                        <IoTrashBinOutline className='absolute top-2 right-0.5 w-10' />
                    </div>
                </div>
            </div>
            <p className='ml-3 text-sm lg:text-base'>Delivery in</p>
            <p className='ml-5 text-xs lg:text-base'>30 min</p>
            <p className='ml-3 text-sm lg:text-base'>Price</p>
            <p className='ml-5 mb-3 text-xs lg:text-base'>30 dollar</p>
        </div>
    );
}

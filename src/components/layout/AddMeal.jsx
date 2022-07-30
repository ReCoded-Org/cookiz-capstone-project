import { useEffect, useState } from "react";
import { HiArrowSmLeft, HiArrowSmRight, HiPlusCircle } from "react-icons/hi";
import { IoAddCircleOutline, IoTrashBinOutline } from "react-icons/io5";
export default function AddMeal() {
    const imageUrl = "../images/header.jpg";

    const [meal, setMeal] = useState({
        imageUrl: "",
        name: "",
        dietary: [],
        ingredients: ["tangerina", "cucumber"],
        minute: "",
        price: "",
    });

    useEffect(() => {}, [meal]);

    function addIngredient(value) {
        const obj = {
            ...meal,
            ingredients: [...meal["ingredients"], value],
        };
        setMeal(obj);
    }
    return (
        <div className='flex h-fit w-[340px] flex-col items-start justify-start gap-3 overflow-hidden'>
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",

                    border: "none",
                }}
                className='mx-0 mt-0 flex h-48 w-full items-center justify-center overflow-hidden bg-center bg-no-repeat'
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
                value={Event.value}
                onChange={(e) => {
                    const obj = { ...meal, name: e.target.value };
                    setMeal(obj);
                }}
            />
            <p className='ml-3 text-sm lg:text-base'>Dietary</p>
            <div className='ml-5 flex w-full items-center justify-start gap-3'>
                <label
                    className=' w-1/4 rounded-full  bg-[#00494533] p-2 text-center text-xs text-zinc-800 lg:w-1/3 lg:text-sm'
                    htmlFor='vegetarianid'
                >
                    <input
                        type='checkbox'
                        id='vegetarianid'
                        value='vegetarianid'
                        checked=''
                        className='hidden'
                    />
                    Vegetarian
                </label>
                <label
                    className=' w-1/4 rounded-full  bg-[#00494533] p-2 text-center text-xs text-zinc-800 lg:w-1/3 lg:text-sm'
                    htmlFor='vegetarianid'
                >
                    <input
                        type='checkbox'
                        id='vegetarianid'
                        value='vegetarianid'
                        checked=''
                        className='hidden'
                    />
                    Vegan
                </label>
                <label
                    className=' w-1/4 rounded-full  bg-[#00494533] p-2 text-center text-xs text-zinc-800 lg:w-1/3 lg:text-sm'
                    htmlFor='vegetarianid'
                >
                    <input
                        type='checkbox'
                        id='vegetarianid'
                        value='vegetarianid'
                        checked=''
                        className='hidden'
                    />
                    Gluten Free
                </label>
            </div>
            <p className='ml-3 text-sm lg:text-base'>Ingredients</p>
            <div className='ml-5 flex w-full flex-col items-start justify-start gap-3'>
                <div className='relative w-1/3'>
                    <input
                        type='text'
                        placeholder='Tomatoes'
                        value={Event.value}
                        className=' w-full rounded-full border-none bg-[#00494533] p-2 text-start text-xs focus:ring-1 focus:ring-[#004945] lg:text-sm'
                    ></input>
                    <IoAddCircleOutline
                        onClick={(e) => {
                            addIngredient(e.target.value);
                        }}
                        className='absolute top-2 right-0.5 w-10'
                    ></IoAddCircleOutline>
                </div>

                <div className='flex w-full flex-wrap items-start justify-start gap-3'>
                    {meal["ingredients"].map((ingredient) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className=' relative w-1/3'>
                            <p className='w-full rounded-full border-none bg-[#00494533] p-2 text-start text-xs text-zinc-800 lg:text-sm'>
                                {ingredient}
                            </p>
                            <IoTrashBinOutline className='absolute top-2 right-0.5 w-10' />
                        </div>
                    ))}
                </div>
            </div>
            <p className='ml-3 text-sm lg:text-base'>Delivery in</p>
            <input
                type='text'
                className='ml-5  rounded border-none text-xs ring-1 ring-[#004945] focus:rounded focus:ring-1 focus:ring-[#004945] lg:text-base'
                placeholder='30 min'
                value=''
            ></input>

            <p className='ml-3 text-sm lg:text-base'>Price</p>
            <input
                type='text'
                className='ml-5 mb-3 rounded border-none text-xs ring-1 ring-[#004945] focus:rounded focus:ring-1 focus:ring-[#004945] lg:text-base'
                placeholder='30 dollar'
                value=''
            ></input>

            <button className=' absolute bottom-72 right-0  rounded bg-[#004945] px-6 py-1 text-white'>
                Save
            </button>
        </div>
    );
}

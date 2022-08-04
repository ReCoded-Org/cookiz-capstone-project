import { useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import { IoAddCircleOutline, IoTrashBinOutline } from "react-icons/io5";
export default function AddMeal() {
    const [mealImage, setMealImage] = useState("../images/header.jpg");
    const [mealName, setMealName] = useState("");
    const [dietary, setDietary] = useState([]); // I know it seems unnecessary I put maybe we can use for filter
    const [vegan, isVegan] = useState(false);
    const [vegetarian, isVegetarian] = useState(false);
    const [glutenFree, isGlutenFree] = useState(false);
    const [ingredient, setIngredient] = useState(""); //it keeps state of place adjacent to plus icon
    const [ingredients, setIngredients] = useState([]); // it keeps array of all ingredients
    const [deliveryMin, setDeliveryMin] = useState("");
    const [price, setPrice] = useState("");

    function chooseImage(e) {
        setMealImage(URL.createObjectURL(e.target.files[0]));
    }
    function deleteIngredients(ingredientId) {
        setIngredients(
            ingredients.filter((item, itemId) => itemId !== ingredientId)
        );
    }
    function addIngredients(ingredient) {
        //add single ingredient to list
        setIngredients([...ingredients, ingredient]);
    }
    function checkVegan() {
        isVegan(!vegan);
        vegan ? setDietary([...dietary, "vegan"]) : null;
    }
    function checkVegetarian() {
        isVegetarian(!vegetarian);
        vegetarian ? setDietary([...dietary, "vegetarian"]) : null;
    }
    function checkGluten() {
        isGlutenFree(!glutenFree);
        glutenFree ? setDietary([...dietary, "gluten free"]) : null;
    }
    return (
        <div className='flex h-fit w-[340px] flex-col items-start justify-start gap-3 overflow-hidden'>
            <div
                style={{
                    backgroundImage: `url(${mealImage})`,
                    backgroundSize: "cover",

                    border: "none",
                }}
                className='mx-0 mt-0 flex h-48 w-full items-center justify-center overflow-hidden bg-center bg-no-repeat'
            >
                <div className='md:gap-80 lg:gap-y-96 flex items-center justify-between gap-28 text-white'>
                    {/* <HiArrowSmLeft
                        className='cursor-pointer'
                        style={{ fontSize: "40px" }}
                    /> */}
                    <input
                        type='file'
                        id='add-image'
                        className='peer hidden'
                        required=''
                        onChange={chooseImage}
                    />
                    <label
                        htmlFor='add-image'
                        className='inline-flex w-full cursor-pointer items-center justify-between'
                    >
                        <div className='block'>
                            <HiPlusCircle
                                className='cursor-pointer'
                                style={{ fontSize: "40px" }}
                            />
                        </div>
                    </label>

                    {/* <HiArrowSmRight
                        className='cursor-pointer'
                        style={{ fontSize: "40px" }}
                    /> */}
                </div>
            </div>

            <input
                type='text'
                placeholder='Fried Chips'
                className='lg:text-base ml-5 w-2/3 rounded border-none bg-[#00494533] text-center text-sm focus:ring-1 focus:ring-[#004945]'
                required
                value={mealName}
                onChange={(e) => {
                    setMealName(e.target.value);
                }}
            />
            <p className='lg:text-base ml-3 text-sm'>Dietary</p>
            <ul className='ml-5 flex w-full items-center justify-start gap-3'>
                <li>
                    <input
                        type='checkbox'
                        id='react-option'
                        className='peer hidden'
                        required=''
                        onChange={() => checkVegetarian()}
                    />
                    <label
                        htmlFor='react-option'
                        className='inline-flex w-full cursor-pointer items-center justify-between rounded-full bg-[#00494533] p-1 ring-1 ring-[#00494533] peer-checked:ring-[#004945]'
                    >
                        <div className='block'>
                            <div className='w-full text-xs '>Vegetarian</div>
                        </div>
                    </label>
                </li>
                <li>
                    <input
                        type='checkbox'
                        id='flowbite-option'
                        className='peer hidden'
                        onChange={() => checkVegan()}
                    />
                    <label
                        htmlFor='flowbite-option'
                        className='inline-flex w-full cursor-pointer items-center justify-between rounded-full bg-[#00494533] p-1 ring-1 ring-[#00494533] peer-checked:ring-[#004945]'
                    >
                        <div className='block'>
                            <div className='w-full text-xs'>Vegan</div>
                        </div>
                    </label>
                </li>
                <li>
                    <input
                        type='checkbox'
                        id='angular-option'
                        className='peer hidden'
                        onChange={() => checkGluten()}
                    />
                    <label
                        htmlFor='angular-option'
                        className='inline-flex w-full cursor-pointer items-center justify-between rounded-full bg-[#00494533] p-1 ring-1 ring-[#00494533] peer-checked:ring-[#004945]'
                    >
                        <div className='block'>
                            <div className='w-full text-xs'>Gluten Free</div>
                        </div>
                    </label>
                </li>
            </ul>

            <p className='lg:text-base ml-3 text-sm'>Ingredients</p>
            <div className='ml-5 flex w-full flex-col items-start justify-start gap-3'>
                <div className='relative w-1/3'>
                    <input
                        type='text'
                        placeholder='Tomatoes'
                        value={ingredient}
                        className=' lg:text-sm w-full rounded-full border-none bg-[#00494533] p-2 text-start text-xs focus:ring-1 focus:ring-[#004945]'
                        onChange={(e) => setIngredient(e.target.value)}
                    ></input>
                    <IoAddCircleOutline
                        onClick={() => addIngredients(ingredient)}
                        className='absolute top-2 right-0.5 w-10 cursor-pointer'
                    ></IoAddCircleOutline>
                </div>

                <div className='flex w-full flex-wrap items-start justify-start gap-3'>
                    {ingredients.map((ingredient, id) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className=' relative w-1/3'>
                            <p className='lg:text-sm w-full rounded-full border-none bg-[#00494533] p-2 text-start text-xs text-zinc-800'>
                                {ingredient}
                            </p>
                            <IoTrashBinOutline
                                onClick={() => deleteIngredients(id)}
                                className='absolute top-2 right-0.5 w-10 cursor-pointer'
                            />
                        </div>
                    ))}
                </div>
            </div>
            <p className='lg:text-base ml-3 text-sm'>Delivery in</p>
            <input
                type='text'
                className='lg:text-base  ml-5 rounded border-none text-xs ring-1 ring-[#004945] focus:rounded focus:ring-1 focus:ring-[#004945]'
                placeholder='30 min'
                onChange={(e) => setDeliveryMin(e.target.value)}
            ></input>

            <p className='lg:text-base ml-3 text-sm'>Price</p>
            <input
                type='text'
                className='lg:text-base ml-5 mb-3 rounded border-none text-xs ring-1 ring-[#004945] focus:rounded focus:ring-1 focus:ring-[#004945]'
                placeholder='30 dollar'
                onChange={(e) => setPrice(e.target.value)}
            ></input>

            <button
                onClick={(e) => {
                    e.preventDefault();
                }}
                className=' absolute bottom-80 right-0  mr-2 rounded bg-[#004945] px-6 py-1 text-white'
            >
                Save
            </button>
        </div>
    );
}

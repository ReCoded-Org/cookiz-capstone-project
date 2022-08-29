import axios from "axios";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

const Menu = ({ dishes, findChef }) => {
    return (
        <>
            {dishes.map((dish, id) => {
                const name = findChef(dish._id);
                console.log(
                    "have just printed dish the one in the begiingig",
                    dish
                );

                return (
                    <div className='card relative' key={id}>
                        <img
                            src='/images/meat.jpg'
                            width='500'
                            height='300'
                            alt='meatball'
                        />
                        <span className='m-4 text-sm font-bold md:text-base '>
                            {dish.title}
                        </span>

                        <div className='  border-5 md:w-51 flex flex-row justify-between  p-2'>
                            <img
                                src='/images/Avatar.png'
                                width='50'
                                height='32'
                                layout='intrinsic'
                                alt='chef'
                            />
                            <span className='pt-3 text-sm font-bold md:pr-7 md:pl-3 md:text-base'>
                                {name?.kitchen_name}
                            </span>
                            <button
                                className='focus:shadow-outline text-black-700 m-2 h-8 rounded-lg bg-gray-300 px-4 text-sm font-semibold transition-colors duration-100 hover:bg-gray-400'
                                onClick={() => {
                                    window.location.href = `/AddMealModal`;
                                    return (
                                        <div
                                            className='relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700'
                                            role='alert'
                                        >
                                            <strong className='font-bold'>
                                                Holy smokes!
                                            </strong>
                                            <span className='block sm:inline'>
                                                Something seriously bad
                                                happened.
                                            </span>
                                            <span className='absolute top-0 bottom-0 right-0 px-4 py-3'>
                                                <svg
                                                    className='h-6 w-6 fill-current text-red-500'
                                                    role='button'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    viewBox='0 0 20 20'
                                                >
                                                    <title>Close</title>
                                                    <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
                                                </svg>
                                            </span>
                                        </div>
                                    );
                                }}
                            >
                                Add
                            </button>
                        </div>
                        <span className='text-grey-500 text-xs md:text-sm'></span>

                        <div className='absolute top-0 ml-2 mt-2 rounded-full bg-stone-50 px-4 text-sm text-gray-600 text-opacity-80 opacity-100'>
                            {" "}
                            <span>{dish.price} TL</span>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

const LandingMeals = () => {
    const { t } = useTranslation("landing-meals");
    const [dishes, setDishes] = useState([]);
    const [menu, setMenu] = useState([]);
    const [chefs, setChefs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const dishesList = axios
            .get("https://cookiez-app.herokuapp.com/api/dishes")
            .then((response) => setDishes(response.data));

        const chefs = axios
            .get("https://cookiez-app.herokuapp.com/api/chefs")
            .then((response) => {
                setMenu(response.data);
                setChefs(response.data);
                setLoading(false);
                {
                    setMenu(dishes);
                }
            });
        setLoading(false);
    }, []);

    const findChef = (chefId) => {
        return chefs.find((chef) => chef.dishes[0] === chefId);
    };

    const content = loading ? (
        <div className='text-center'>
            <div role='status'>
                <svg
                    className='mr-2 inline h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600'
                    viewBox='0 0 100 101'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                        fill='currentColor'
                    />
                    <path
                        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                        fill='currentFill'
                    />
                </svg>
                <span className='sr-only'>Loading...</span>
            </div>
        </div>
    ) : (
        <div className='m-14 grid md:grid-cols-6 '>
            <div className='md:col-span-1 '>
                <nav>
                    <div>
                        <div className='mt-[1px] flex justify-center'>
                            <input
                                className='mt-20  rounded-xl font-semibold hover:font-bold'
                                type='search'
                                placeholder={t("Search")}
                                name='search'
                            />
                        </div>
                        <h1 className='flex justify-start pt-2 font-bold'>
                            {t("Categories")}
                        </h1>
                        <ul className='flex flex-col items-start px-2 pb-3'>
                            <li
                                key='-1'
                                className='font-sans hover:underline'
                                onClick={(e) => {
                                    {
                                        setMenu(dishes);
                                    }
                                }}
                            >
                                All Menu
                            </li>

                            {dishes.map((dish, id) => {
                                return (
                                    <li
                                        key={id}
                                        className='font-sans hover:underline'
                                        id={dish.dish_type}
                                        onClick={(e) => {
                                            console.log("this is it ");
                                            console.log(e.target.id);
                                            console.log(
                                                "this is the my dihes  ",
                                                dishes
                                            );
                                            if (e.target.id === "All Menu") {
                                                setMenu(dishes);
                                            } else {
                                                setMenu(
                                                    dishes.filter(
                                                        (dish) =>
                                                            dish.dish_type ===
                                                            e.target.id
                                                    )
                                                );
                                            }
                                        }}
                                    >
                                        {dish.dish_type}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
            <div className='py-7  md:col-span-5'>
                <div className='m-16 mt-8 grid gap-10 sm:grid-cols-1  lg:grid-cols-3'>
                    <Menu dishes={menu} chefs={chefs} findChef={findChef} />
                </div>
            </div>
        </div>
    );
    return <>{content}</>;
};
export default LandingMeals;

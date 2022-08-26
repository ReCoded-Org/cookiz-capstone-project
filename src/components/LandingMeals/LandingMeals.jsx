import axios from "axios";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

const Menu = ({ dishes, chefs, findChef }) => {
    return (
        <>
            {dishes.map((dish, id) => {
                const name = findChef(dish._id);
                console.log(name);
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
                            <button className='focus:shadow-outline text-black-700 m-2 h-8 rounded-lg bg-gray-300 px-4 text-sm font-semibold transition-colors duration-100 hover:bg-gray-400'>
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

    useEffect(() => {
        const dishesList = axios
            .get("https://cookiez-app.herokuapp.com/api/dishes")
            .then((response) => setDishes(response.data));

        const chefs = axios
            .get("https://cookiez-app.herokuapp.com/api/chefs")
            .then((response) => {
                setMenu(response.data);
                setChefs(response.data);
            });
    }, []);

    const findChef = (chefId) => {
        return chefs.find((chef) => chef.dishes[0] === chefId);
    };
    ("62fd190cd38c08c2fee59595");
    // console.log("chefs");
    // console.log("dishes");
    console.log(dishes);
    console.log(menu);

    return (
        <div className='m-14 grid md:grid-cols-6 '>
            <div className='md:col-span-1 '>
                <nav>
                    <div>
                        <div className='mt-[1px] flex justify-center'>
                            <input
                                className='rounded-xl  font-semibold hover:font-bold'
                                type='search'
                                placeholder={t("Search")}
                                name='search'
                            />
                        </div>
                        <h1 className='flex justify-start pt-8 font-bold'>
                            {t("Categories")}
                        </h1>
                        <ul className='flex flex-col items-start px-2 pt-3'>
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
            <div className='md:col-span-5  '>
                <div className='m-16 mt-8 grid gap-10 sm:grid-cols-1  lg:grid-cols-3'>
                    <Menu dishes={menu} chefs={chefs} findChef={findChef} />
                </div>
            </div>
        </div>
    );
};
export default LandingMeals;

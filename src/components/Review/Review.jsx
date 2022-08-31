import React from "react";
import { useState } from "react";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import { MdReviews } from "react-icons/md";
const info = [
    {
        avatar: "https://www.bankinter.com/file_source/nbol/images/Nav/Banca%20personal/fondos_inversion_pers.jpg",

        from: "Hasan",
        to: "Manti",
        date: "07/09/2021",
        stars: "3",
        comment: "The food was super good thank you so much for it chef",
    },
    {
        avatar: "https://stock.adobe.com/de/images/close-up-headshot-portrait-of-smiling-vietnamese-young-woman-look-at-camera-talk-on-video-call-profile-picture-of-happy-millennial-asian-girl-engaged-in-webcam-conference-or-virtual-event-at-home/367464887",

        from: "Ali",
        to: "Jassica",
        date: "17/05/2021",
        stars: "4.5",
        comment:
            "There is plenty of variety when picking the menus, and we love trying new ingredients when they are featured.",
    },
    {
        avatar: "https://stock.adobe.com/de/images/studio-close-up-portrait-of-a-handsome-young-man-closeup-headshot-of-a-confident-adult-man-with-a-kind-smile-and-a-happy-face-expression-isolated-on-a-solid-green-background/491764612",

        from: "Ahmet",
        to: "Zishan",
        date: "21/01/2021",
        stars: "2.5",
        comment:
            "They arrive in a refrigerated box along with a recipe card, which is very well written.",
    },
    {
        avatar: "https://stock.adobe.com/de/images/studio-close-up-portrait-of-a-handsome-young-man-closeup-headshot-of-a-confident-adult-man-with-a-kind-smile-and-a-happy-face-expression-isolated-on-a-solid-green-background/491764612",

        from: "Ahmet",
        to: "Zishan",
        date: "21/01/2021",
        stars: "2.5",
        comment:
            "They arrive in a refrigerated box along with a recipe card, which is very well written.",
    },
];

function Review() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch("http://localhost:8000/mark")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setReviews(data);
    //             setLoading(false);
    //         });
    // }, []);
    // console.log(reviews);

    function countStars(stars) {
        let count = [];
        const fullStars = Math.floor(stars);
        for (let i = 0; i < fullStars; i++) {
            count.push(<ImStarFull key={i} />);
        }
        if (stars % 1 !== 0) {
            count.push(<ImStarHalf key={fullStars} />);
        }
        return count;
    }

    return (
        <div className='lg:container lg:container xl:mx-auto xl:mx-auto'>
            <div className=' mx-10  text-5xl font-light'>
                <MdReviews className='mx-3 inline'></MdReviews>Reviews
            </div>

            <div className='grid grid-cols-5'>
                <div className='col-span-1 row-span-5 mt-5    lg:mx-1 xl:mx-8'>
                    <img
                        className=' h-100 w-100 rounded-full object-contain'
                        src={info[0].avatar}
                        alt=''
                    />
                </div>
                {info.map((item, index) => {
                    return (
                        <>
                            <div
                                key={index}
                                className='  mt-15 col-span-1 col-span-4  font-normal  lg:px-5'
                            >
                                <div className='md:flex-column flex flex-col '>
                                    <div className=' mt-5 text-lg'>
                                        To{" "}
                                        <span className='font-bold'>
                                            {" "}
                                            {item.to}
                                        </span>{" "}
                                        from {item.from} on{" "}
                                        <span className='font-bold'>
                                            21/01/2021
                                        </span>
                                    </div>
                                    <div className='mx-1 mt-5 inline flex flex-row text-5xl font-medium'>
                                        {countStars(item.stars).map(
                                            (star) => star
                                        )}
                                    </div>
                                    <div className='pt-5 text-lg  font-bold'>
                                        {item.comment}
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default Review;

import React from "react";
import { useEffect, useState } from "react";

function Review() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:8000/mark")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
                setLoading(false);
            });
    }, []);
    console.log(reviews);
    return (
        <div>
            <h1>Reviews</h1>
        </div>
    );
}

export default Review;

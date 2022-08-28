import * as React from "react";

import Navbar from "@/components/Navbar/Navbar";

import Footer from "../Footer/Footer";
import LandingMeals from "../LandingMeals/LandingMeals";

export default function Layout({ children }) {
    // Put Header or Footer around the children element
    return (
        <>
            <Navbar />
            {children}
            <LandingMeals></LandingMeals>
            <Footer />
        </>
    );
}

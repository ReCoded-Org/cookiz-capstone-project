import * as React from "react";

import Navbar from "@/components/Navbar/Navbar";

import Footer from "../Footer/Footer";

export default function Layout({ children }) {
    // Put Header or Footer around the children element
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

import * as React from "react";

import Hero from "@/components/hero/Hero";

export default function Layout({ children }) {
    // Put Header or Footer around the children element
    return (
        <>
            <Hero />
            {children}
        </>
    );
}

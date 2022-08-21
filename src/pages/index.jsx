import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import Cards from "@/components/Cards/Cards";
import Hero from "@/components/Hero/Hero";
import LandingMeals from "@/components/LandingMeals/LandingMeals";
import Layout from "@/components/Layout/Layout";
import SearchCities from "@/components/SearchCities/SearchCities";

export default function HomePage() {
    return (
        <Layout>
            <Hero />
            <Cards />
            <SearchCities />
            <LandingMeals />
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "hero",
                "cards",
                "search-cities",
                "footer",
                "addmeal",
                "navbar",
                "create-account",
                "edit-account",
                "profile",
                "landing-meals",
            ])),
            // Will be passed to the page component as props
        },
    };
}

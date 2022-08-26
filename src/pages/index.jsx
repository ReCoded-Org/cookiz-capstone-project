import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import Cards from "@/components/Cards/Cards";
import Hero from "@/components/Hero/Hero";
import Layout from "@/components/Layout/Layout";
import SearchCities from "@/components/SearchCities/SearchCities";
export default function HomePage() {
    // eslint-disable-next-line
    const { t } = useTranslation("common");

    return (
        <Layout>
            <Hero />
            <Cards />
            <SearchCities />
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "cards",
                "addmeal",
            ])),
            // Will be passed to the page component as props
        },
    };
}

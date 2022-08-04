import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import AddMeal from "@/components/AddMeal/AddMeal";
import Cards from "@/components/Cards/Cards";
import Hero from "@/components/hero/Hero";
import Layout from "@/components/layout/Layout";

export default function HomePage() {
    // eslint-disable-next-line
    const { t } = useTranslation("common");

    return (
        <Layout>
            <Hero />
            <Cards />
            <AddMeal />
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}

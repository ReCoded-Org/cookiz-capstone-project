import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import LandingMeals from "@/components/LandingMeals/LandingMeals";
import Layout from "@/components/layout/Layout";

export default function HomePage() {
    // eslint-disable-next-line
    const { t } = useTranslation("common");

    return (
        <Layout>
            <LandingMeals />
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

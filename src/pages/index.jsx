import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import Layout from "@/components/layout/Layout";
import SearchCities from "@/components/SearchCities/SearchCities";
export default function HomePage() {
    return (
        <Layout>
            <SearchCities></SearchCities>
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

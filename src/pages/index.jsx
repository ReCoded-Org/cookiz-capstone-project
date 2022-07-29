import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import AddMeal from "@/components/layout/AddMeal";
import Layout from "@/components/layout/Layout";

export default function HomePage() {
    return (
        <Layout>
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

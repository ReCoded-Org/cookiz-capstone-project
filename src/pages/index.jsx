import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import Cards from "@/components/Cards/Cards";
import Layout from "@/components/layout/Layout";

export default function HomePage() {
    // eslint-disable-next-line
    const { t } = useTranslation("common");

    return (
        <Layout>
            <Cards />
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

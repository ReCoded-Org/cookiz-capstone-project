import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";


import Layout from "@/components/layout/Layout";
import New from "@/components/New";
import Cards from "@/components/Cards/Cards";

export default function HomePage() {
    const { t } = useTranslation("common");

    return (
        <Layout>
           

<Cards/>



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

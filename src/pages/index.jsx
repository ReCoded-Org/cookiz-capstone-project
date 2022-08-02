
import { useTranslation } from "next-i18next";
import Cards from "@/components/Cards/Cards";
import Hero from "@/components/hero/Hero";

export default function HomePage() {
    // eslint-disable-next-line
    const { t } = useTranslation("common");

    return (
        <Layout>
            <Hero />
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

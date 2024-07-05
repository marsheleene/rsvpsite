import ClearLayout from "../../components/Layout/ClearLayout";
import MainLayout from "../../components/Layout/MainLayout";
import NewsletterForm from "../../components/NewsletterForm/NewsletterForm"
import newsletter_PNG from "../../images/newsletter.png";

const titlePage = "RSVP : le jeu vidéo : la newsletter";

export const metadata = {
    title: titlePage,
    openGraph: {
        title: titlePage,
        images: [
            {
                url: newsletter_PNG.src
            }
        ]
    },
    twitter: {
        title: titlePage
    }
}

export default function Page() {
    return (
        <MainLayout>
            <NewsletterForm />
        </MainLayout>
    );
}
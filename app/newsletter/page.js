import ClearLayout from "../../components/Layout/ClearLayout"
import NewsletterForm from "../../components/NewsletterForm/NewsletterForm"
import newsletter_PNG from "../../images/newsletter.png";

export const metadata = {
    openGraph: {
        images: [
            {
                url: newsletter_PNG.src
            }
        ],
    }
}

export default function Page() {
    return (
        <ClearLayout>
            <NewsletterForm />
        </ClearLayout>
    );
}
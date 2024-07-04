
import Link from "next/link";
import LeftColumn from './Layout/LeftColumn';
import RightColumn from './Layout/RightColumn';
import Bottom from './Layout/Bottom';
import NewsletterButton from '../NewsletterButton/NewsletterButton';

function Presskit(props) {
    return (
        <div className="md:grid grid-cols-3 gap-10">

            <div className="mt-6 md:mt-0 col-span-3">
                <NewsletterButton className="flex justify-center" />
            </div>

            <div className="hidden md:flex md:flex-col col-span-1 break-inside-avoid-column mb-10">
                <LeftColumn />
            </div>

            <div className="col-span-2 break-inside-avoid-column">

                <RightColumn />

                <div className="md:hidden">

                    <Bottom />

                </div>

            </div>

            <div className="md:hidden col-span-1 break-inside-avoid-column mb-6">
                <LeftColumn />
            </div>

            <div className="hidden md:flex md:flex-col col-span-3 mb-6">

                <Bottom />

            </div>

            <div className="col-span-3 flex flex-row justify-center">

                <Link href="https://rsvpgame.com/privacy" target="_blank" className="text-sm mb-4 hover:underline">politique de confidentialité</Link>

            </div>

        </div>
    );
}

export default Presskit;

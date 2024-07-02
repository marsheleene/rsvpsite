
import LeftColumn from './Layout/LeftColumn';
import RightColumn from './Layout/RightColumn';
import Bottom from './Layout/Bottom';
import NewsletterModal from '../NewsletterModal/NewsletterModal';

function Presskit(props) {
    return (
        <div class="md:grid grid-cols-3 gap-10">

            <div class="hidden mt-6 md:mt-0 col-span-3">
                <NewsletterModal className="flex justify-center" />
            </div>

            <div class="hidden md:flex md:flex-col col-span-1 break-inside-avoid-column mb-10">
                <LeftColumn />
            </div>

            <div class="col-span-2 break-inside-avoid-column">

                <RightColumn />

                <div class="md:hidden">

                    <Bottom />

                </div>

            </div>

            <div class="md:hidden col-span-1 break-inside-avoid-column mb-10">
                <LeftColumn />
            </div>

            <div class="hidden md:flex md:flex-col col-span-3 mb-10">

                <Bottom />

            </div>

        </div>
    );
}

export default Presskit;

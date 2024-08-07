import Separator from "../sections/Separator/Separator";
import ConceptArtSection from "../sections/ConceptArt/ConceptArtSection";
import TeamSection from "../sections/Team/TeamSection";
import HistorySection from "../sections/History/HistorySection";
import NewsletterButton from "../../NewsletterButton/NewsletterButton";
import CNC from "../sections/CNC/CNC";

function Bottom() {
    return (
        <>
            <ConceptArtSection />

            <Separator height={4} />

            <TeamSection />

            <Separator height={4} />

            <HistorySection />

            <Separator height={12} />

            <NewsletterButton className="m-auto" />

            <Separator height={12} />

            <CNC />
        </>
    );
  }
  
  export default Bottom;
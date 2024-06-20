import Separator from "../sections/Separator/Separator";
import ConceptArtSection from "../sections/ConceptArt/ConceptArtSection";
import TeamSection from "../sections/Team/TeamSection";

function Bottom() {
    return (
        <>
            <ConceptArtSection />

            <Separator height={4} />

            <TeamSection />
        </>
    );
  }
  
  export default Bottom;
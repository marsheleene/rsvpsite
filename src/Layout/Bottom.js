import Item from "../sections/Item";
import ConceptArtSection from "../sections/ConceptArt/ConceptArtSection";
import TeamSection from "../sections/Team/TeamSection";

function Bottom() {
    return (
        <>
            <Item title="Concept art">
                <ConceptArtSection />
            </Item>

            <Item title="About Team RSVP">
                <TeamSection />
            </Item>
        </>
    );
  }
  
  export default Bottom;
import Item from "../sections/Item";
import ConceptArtSection from "../sections/ConceptArt/ConceptArtSection";
import TeamSection from "../sections/Team/TeamSection";

function Bottom() {
    return (
        <>
            <Item title="Concept arts">
                <ConceptArtSection />
            </Item>

            <p class="my-4"></p>

            <Item title="À propos de la Team RSVP">
                <TeamSection />
            </Item>
        </>
    );
  }
  
  export default Bottom;
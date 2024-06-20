import Factsheet from "../sections/Factsheet/Factsheet";
import Item from "../sections/Item";
import CreditsSection from "../sections/Credits/CreditsSection";
import ContactSection from "../sections/Contact/ContactSection";

function LeftColumn() {
    return (
        <>
            <Factsheet />

            <CreditsSection />

            <ContactSection />
        </>
    );
  }
  
  export default LeftColumn;
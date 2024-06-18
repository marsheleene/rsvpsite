import DescriptionSection from "../sections/Description/DescriptionSection";
import HistorySection from "../sections/History/HistorySection";
import FeaturesSection from "../sections/Features/FeaturesSection";

function RightColumn() {
    return (
      <>
        <DescriptionSection />

        <HistorySection />

        <FeaturesSection />
      </>
    );
  }
  
  export default RightColumn;
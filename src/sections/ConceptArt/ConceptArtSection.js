import ImageItem from "./ImageItem";

import img_concept1 from '../../images/concept1.png';
import img_concept2 from '../../images/concept2.png';
import img_concept3 from '../../images/concept3.png';
import img_concept4 from '../../images/concept4.png';

function ConceptArtSection(props) {
  return (
    <div class="columns-2">
      <ImageItem src={img_concept1} alt="Concept art for the video game RSVP" />
      <ImageItem src={img_concept2} alt="Concept art for the video game RSVP" />
      <ImageItem src={img_concept3} alt="Concept art for the video game RSVP" />
      <ImageItem src={img_concept4} alt="Concept art for the video game RSVP" />
  </div>
  );
}

export default ConceptArtSection;

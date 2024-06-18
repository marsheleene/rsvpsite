import ImageItem from "./ImageItem";

import img_concept1_PNG from '../../../../images/concept1.png'
import img_concept2_PNG from '../../../../images/concept2.png';
import img_concept3_PNG from '../../../../images/concept3.png';
import img_concept4_PNG from '../../../../images/concept4.png';
import img_concept5_PNG from '../../../../images/concept5.png';
import img_concept1 from '../../../../images/concept1.webp'
import img_concept2 from '../../../../images/concept2.webp';
import img_concept3 from '../../../../images/concept3.webp';
import img_concept4 from '../../../../images/concept4.webp';
import img_concept5 from '../../../../images/concept5.webp';

function ConceptArtSection(props) {
  return (
    <div class="md:columns-2">
      <ImageItem full src={img_concept5_PNG} display={img_concept5} alt="Concept art for the video game RSVP" />
      <ImageItem src={img_concept1_PNG} display={img_concept1} alt="Concept art for the video game RSVP" />
      <ImageItem src={img_concept2_PNG} display={img_concept2} alt="Concept art for the video game RSVP" />
      <ImageItem src={img_concept3_PNG} display={img_concept3} alt="Concept art for the video game RSVP" />
      <ImageItem src={img_concept4_PNG} display={img_concept4} alt="Concept art for the video game RSVP" />
  </div>
  );
}

export default ConceptArtSection;

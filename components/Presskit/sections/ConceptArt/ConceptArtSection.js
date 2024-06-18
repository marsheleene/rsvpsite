import ImageItem from "./ImageItem";

import img_concept1_PNG from '../../../../images/concept1.png'
import img_concept2_PNG from '../../../../images/concept2.png';
import img_concept3_PNG from '../../../../images/concept3.png';
import img_concept4_PNG from '../../../../images/concept4.png';
import img_concept5_PNG from '../../../../images/concept5.png';
import img_concept1 from '../../../../images/opt_concept1.webp'
import img_concept2 from '../../../../images/opt_concept2.webp';
import img_concept3 from '../../../../images/opt_concept3.webp';
import img_concept4 from '../../../../images/opt_concept4.webp';
import img_concept5 from '../../../../images/opt_concept5.webp';

function ConceptArtSection(props) {
  return (
    <div class="md:columns-2">
      <ImageItem className="md:mx-auto w-full md:w-9/12" center large src={img_concept5_PNG} display={img_concept5} alt="Concept art for the video game RSVP" />
      <ImageItem className="md:mx-auto md:mr-2 w-full md:w-9/12" src={img_concept1_PNG} display={img_concept1} alt="Concept art for the video game RSVP" />
      <ImageItem className="md:mx-auto md:ml-2 w-full md:w-9/12" src={img_concept3_PNG} display={img_concept3} alt="Concept art for the video game RSVP" />
      <ImageItem className="md:mx-auto w-full md:w-1/2" center src={img_concept4_PNG} display={img_concept4} alt="Concept art for the video game RSVP" />
      <ImageItem className="md:mx-auto w-full md:w-9/12" center src={img_concept2_PNG} display={img_concept2} alt="Concept art for the video game RSVP" />
  </div>
  );
}

export default ConceptArtSection;

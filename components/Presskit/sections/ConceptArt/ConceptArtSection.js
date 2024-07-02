'use client';

import { useDownload } from "./useDownload";
import ImageItem from "./ImageItem";
import Image from "next-export-optimize-images/image";
import Item from "../Item";

import icon_download from '../../../../images/icon_download.webp';
import img_concept1_PNG from '../../../../images/concept1.png'
import img_concept2_PNG from '../../../../images/concept2.png';
import img_concept3_PNG from '../../../../images/concept3.png';
import img_concept4_PNG from '../../../../images/concept4.png';
import img_concept5_PNG from '../../../../images/concept5.png';
import img_header_PNG from '../../../../images/header_v1.png';
import img_concept1 from '../../../../images/opt_concept1.webp'
import img_concept2 from '../../../../images/opt_concept2.webp';
import img_concept3 from '../../../../images/opt_concept3.webp';
import img_concept4 from '../../../../images/opt_concept4.webp';
import img_concept5 from '../../../../images/opt_concept5.webp';

function ConceptArtSection(props) {

    const zipName = "RSVP_images.zip";
    const { handleZip } = useDownload();
    const images = [
        img_header_PNG.src,
        img_concept1_PNG.src,
        img_concept2_PNG.src,
        img_concept3_PNG.src,
        img_concept4_PNG.src,
        img_concept5_PNG.src,
    ];

    return (
        <Item title="Concept art" className="flex flex-col items-center">
            <div
                className="cursor-pointer flex flex-col items-center hover:underline decoration-2 decoration-decorationColor md:p-6 border-2 border-transparent rounded-2xl md:hover:border-borderColor transition duration-300"
                onClick={() => handleZip(images, zipName)}
            >
                <span className="text-center text-linkColor">
                    Télécharger toutes les images dans une archive .zip
                </span>
                <Image
                    id="icon-download"
                    src={icon_download}
                    alt="Bouton de téléchargement"
                    className="w-16 md:w-12 mt-4 transition duration-300"
                />
            </div>

            <div class="md:columns-2 mt-8">
                <ImageItem className="md:mx-auto w-full 2xl:w-9/12" center large src={img_concept5_PNG} display={img_concept5} name="concept5.png" alt="Concept art for the video game RSVP" />
                <ImageItem className="md:mx-auto md:mr-2 w-full 2xl:w-9/12" src={img_concept1_PNG} display={img_concept1} name="concept1.png" alt="Concept art for the video game RSVP" />
                <ImageItem className="md:mx-auto md:ml-2 w-full 2xl:w-9/12" src={img_concept3_PNG} display={img_concept3} name="concept3.png" alt="Concept art for the video game RSVP" />
                <ImageItem className="md:mx-auto w-full 2xl:w-7/12" center src={img_concept4_PNG} display={img_concept4} name="concept4.png" alt="Concept art for the video game RSVP" />
                <ImageItem className="md:mx-auto w-full 2xl:w-9/12" center src={img_concept2_PNG} display={img_concept2} name="concept2.png" alt="Concept art for the video game RSVP" />
            </div>
        </Item>
    );
}

export default ConceptArtSection;

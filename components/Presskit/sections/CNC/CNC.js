import Image from "next-export-optimize-images/image";
import Link from "next/link";

import logoCNC from '../../../../images/logo_CNC.webp';

function CNC() {
  return (
    <>
      <p className="mb-2 text-center">Avec le soutien du Centre national du cinéma et de l'image animée</p>
      <Link href="https://www.cnc.fr/professionnels/aides-et-financements/jeu-video/fonds-daide-au-jeu-video-fajv_191468">
        <Image 
          src={logoCNC}
          alt="Logo du Centre national du cinéma et de l'image animée"
          className="mx-auto px-4 max-w-80 md:max-w-sm"
          quality={100}
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </Link>
    </>
  );
}

export default CNC;

import Image from "next/image";
import Link from "next/link";

import logoCNC from '../../../../images/logo_CNC.webp';

function CNC() {
  return (
    <>
      <Link href="https://www.cnc.fr/professionnels/aides-et-financements/jeu-video/fonds-daide-au-jeu-video-fajv_191468">
        <Image 
          src={logoCNC}
          alt="Logo du Centre national du cinéma et de l'image animée"
          className="mx-auto px-4 max-w-sm"
          quality={100}
        />
        
      </Link>
      <p class="mt-2 text-center">Ce projet a reçu le soutien du CNC</p>
    </>
  );
}

export default CNC;

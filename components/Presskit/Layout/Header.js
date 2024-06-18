import Link from "next/link";
import Image from "next/image";

import header_PNG from "../../../images/header_v1.png";
import header from "../../../images/opt_header_v1.webp";

function Header() {
    return (
        <Link href={header_PNG} target="_blank">
            <Image 
                className="mx-auto px-4 mt-4 md:px-8 md:mt-8" 
                src={header} 
                alt="Keyart du jeu RSVP"
                priority
                sizes="(max-width: 768px) 20vw, 100vw"
                quality={100}
            />
        </Link>
    );
  }
  
  export default Header;
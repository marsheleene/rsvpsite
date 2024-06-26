import Link from "next/link";
import Image from "next-export-optimize-images/image";

import { usePathname } from 'next/navigation'

import header from "../../../images/opt_header_v1.webp";

function Header() {
    const pathname = usePathname();
    return (
        <Link href={pathname}>
            <Image 
                className="mx-auto px-4 w-[1500px] mt-4 md:mt-8" 
                src={header} 
                alt="Image d'illustration de RSVP : le jeu vidéo"
                sizes="(max-width: 768px) 50vw, 100vw"
                quality={100}
                priority
                placeHolder="blur"
            />
        </Link>
    );
  }
  
  export default Header;
'use client';

import Image from "next-export-optimize-images/image";
import { useRouter } from 'next/navigation';

import header from "../../images/opt_header_v1.webp";

function Header() {
    const router = useRouter();

    return (
        <Image
            className="cursor-pointer mx-auto px-4 w-[1500px] mt-4 md:mt-8"
            src={header}
            alt="Image d'illustration de RSVP : le jeu vidéo"
            sizes="(max-width: 768px) 50vw, 100vw"
            quality={100}
            priority
            placeholder="blur"
            onClick={() => router.push('/')}
        />
    );
}

export default Header;
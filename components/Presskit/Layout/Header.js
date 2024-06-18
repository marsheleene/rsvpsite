import Image from "next/image";

import headerImg from "../../../images/header_v1.png";

function Header() {
    return (
        <div class="flex justify-center items-center">
            <Image 
                className="mx-4 mt-4 md:mx-8 md:mt-8" 
                src={headerImg} 
                alt="Keyart du jeu RSVP"
                priority
                sizes="(max-width: 768px) 50vw, 100vw"
                quality={100}
            />
        </div>
    );
  }
  
  export default Header;
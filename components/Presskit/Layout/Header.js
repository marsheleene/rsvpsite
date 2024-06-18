import Image from "next/image";

import headerImg from "../../../images/header_v1.png";

function Header() {
    return (
        <>
            <Image 
                className="mx-auto" 
                src={headerImg} 
                alt="Keyart du jeu RSVP"
                priority
            />
        </>
    );
  }
  
  export default Header;
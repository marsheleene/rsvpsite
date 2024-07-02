import Copyright from "../Presskit/sections/Copyright/Copyright";
import Link from "next/link";

function Footer() {
    return (
        <div class="flex flex-col items-center">
            <Link href="https://rsvpgame.com/privacy" target="_blank" className="text-sm mb-4 hover:underline">politique de confidentialité</Link>
            <Copyright />
        </div>
    );
  }
  
  export default Footer;
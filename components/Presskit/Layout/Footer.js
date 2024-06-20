import CNC from "../sections/CNC/CNC";
import Copyright from "../sections/Copyright/Copyright";
import Separator from "../sections/Separator/Separator";

function Footer() {
    return (
        <>
            <Separator height={12} />
            <CNC />
            <Copyright />
        </>
    );
  }
  
  export default Footer;
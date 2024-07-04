import Image from "next-export-optimize-images/image";
import Link from 'next/link';

import iconLinkedIn from '../../../../images/logo_linkedin.webp';
import iconWebsite from '../../../../images/logo_website.webp';

function TeamMember(props) {
  let linkedIn;
  if (props.linkedIn) {
    linkedIn = <li className="mr-1"><Link href={props.linkedIn} target="_blank"> <Image src={iconLinkedIn} alt="LinkedIn Icon" className="max-w-16 md:max-w-8" /> </Link></li>;
  }
  let website;
  if (props.website) {
    website =  <li className="ml-3 md:ml-1"><Link href={props.website} target="_blank"> <Image src={iconWebsite} alt="Website Icon" className="max-w-16 md:max-w-8" /> </Link></li>;
  }
  let className = "break-inside-avoid-column";
  if (props.className) {
    className += " " + props.className;
  }

  return (
    <div className={className}>
      <Image className="max-w-64 max-h-64 mx-auto w-auto drop-shadow-lg hover:scale-105 transition duration-300" src={props.portrait} alt={"Image portrait de " + props.name} />
      <h2 className="font-coquette text-center text-2xl">{props.name}</h2>
      <ul className="flex flex-row place-content-center mt-2">
        {linkedIn && linkedIn}
        {website && website}
      </ul>
      <div className="mt-4 border-2 rounded-2xl border-borderColor bg-white p-6">
        {props.children}
      </div>
    </div>
  );
}

export default TeamMember;

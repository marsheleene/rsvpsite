import Image from 'next/image';
import Link from 'next/link';

import iconLinkedIn from '../../../../images/logo_linkedin.webp';
import iconWebsite from '../../../../images/logo_website.webp';

function TeamMember(props) {
  let linkedIn;
  if (props.linkedIn) {
    linkedIn =  <li class="mr-1"><Link href={props.linkedIn} target="_blank"> <Image src={iconLinkedIn} alt="LinkedIn Icon" className="max-w-16 md:max-w-8" /> </Link></li>;
  }
  let website;
  if (props.website) {
    website =  <li class="ml-3 md:ml-1"><Link href={props.website} target="_blank"> <Image src={iconWebsite} alt="Website Icon" className="max-w-16 md:max-w-8" /> </Link></li>;
  }
  return (
    <div class="break-inside-avoid-column">
      <Image className="max-w-64 max-h-64 mx-auto drop-shadow-lg hover:scale-105 transition duration-300" src={props.portrait} alt="Portrait" />
      <h2 class="font-semibold text-center text-xl">{props.name}</h2>
      <ul class="flex flex-row place-content-center mt-2">
        {linkedIn && linkedIn}
        {website && website}
      </ul>
      <div class="mt-4">
        {props.children}
      </div>
    </div>
  );
}

export default TeamMember;

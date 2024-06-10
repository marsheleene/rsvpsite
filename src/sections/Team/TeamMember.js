import iconLinkedIn from '../../images/logo_linkedin.png';
import iconWebsite from '../../images/logo_website.png';

function TeamMember(props) {
  let linkedIn;
  if (props.linkedIn) {
    linkedIn =  <li class="mr-1"><a href={props.linkedIn} target="_blank"> <img src={iconLinkedIn} alt="LinkedIn Icon" /> </a></li>;
  }
  let website;
  if (props.website) {
    website =  <li class="ml-1"><a href={props.website} target="_blank"> <img src={iconWebsite} alt="Website Icon" /> </a></li>;
  }
  return (
    <div class="break-inside-avoid-column">
      <img class="max-w-64 max-h-64 md:max-w-48 md:max-h-48 mx-auto" src={props.portrait} alt="Portrait" />
      <h2 class="font-semibold text-center">{props.name}</h2>
      <ul class="flex flex-row place-content-center mt-1">
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

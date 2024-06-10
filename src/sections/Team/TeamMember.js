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
    <div>
      <img class="portrait" src={props.portrait} alt="Portrait" />
      <h2>{props.name}</h2>
      <div>
        {props.children}
      </div>
      <ul class="flex flex-row">
        {linkedIn && linkedIn}
        {website && website}
      </ul>
    </div>
  );
}

export default TeamMember;

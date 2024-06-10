function TeamMember(props) {
  return (
    <div>
      <img class="portrait" src={props.portrait} />
      <h2>{props.name}</h2>
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default TeamMember;

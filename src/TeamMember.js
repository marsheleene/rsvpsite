

function TeamMember(props) {
  return (
    <section>
      <h2>{props.name}</h2>
      <div>
        {props.children}
      </div>
    </section>
  );
}

export default TeamMember;

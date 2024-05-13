import "../assets/css/TeamIcons.css";

function TeamIcons(props) {
  const backgroundStyle = {
    backgroundImage: `url(${props.team_header})`,
  };
  return (
    <div className="TeamIcon" style={backgroundStyle}>
      <h3>{props.teamName}</h3>

      <div className="TeamInfo"></div>
    </div>
  );
}

export default TeamIcons;

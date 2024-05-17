import "../assets/css/TeamIcons.css";

function TeamIcons(props) {
  const backgroundStyle = {
    backgroundImage: `url(${props.team_header})`,
  };
  return <div className="TeamIcon" style={backgroundStyle}></div>;
}

export default TeamIcons;

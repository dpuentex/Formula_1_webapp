import "../assets/css/TrackIcons.css";

function TrackIcons(props) {
  return (
    <div className="TrackIconDiv">
      <div className="TrackInfoDiv">
        <h2>{props.gpName}</h2>
        <h3>{props.track_name}</h3>
        <p>{props.country}</p>
        <p>{props.city}</p>
      </div>
      <img className="track_map" src={props.map1} />
    </div>
  );
}

export default TrackIcons;

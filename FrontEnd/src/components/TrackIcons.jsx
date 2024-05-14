import "../assets/css/TrackIcons.css";

function TrackIcons(props) {
  return (
    <div className="TrackIcon">
      <div className="TrackInfoDiv">
        <div className="trackStats">
          <div className="StatDiv">
            <h2>{props.gpName}</h2>
            <h3>{props.track_name}</h3>
            <p>{props.country}</p>
            <p>{props.city}</p>
          </div>
        </div>
      </div>
      <div>
        <img className="track_map" src={props.map1} />
      </div>
    </div>
  );
}

export default TrackIcons;

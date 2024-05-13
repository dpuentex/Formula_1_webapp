function TrackIcons(props) {
  return (
    <div className="TrackIcon">
      <div className="TrackInfoDiv">
        <div className="trackStats">
          <div className="StatDiv">
            <p>First Grand Prix</p>
            <h2>{props.gpName}</h2>
          </div>

          <div className="StatDiv">
            <p>Circuit Length</p>
            <h2></h2>
          </div>
          <div>
            <p>Date of Grand Prix</p>
            <h2></h2>
          </div>
        </div>
        <span>{new Date(Date.now()).toString()}</span>
      </div>
    </div>
  );
}

export default TrackIcons;

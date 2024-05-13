import "../assets/css/DriverIcons.css";

function DriverIcons(props) {
  return (
    <div className="DriverIcon">
      <div className="DriverDetails">
        <h3>{props.driverName}</h3>

        <p>{props.team}</p>
        <div className="Separator" />
      </div>
      <img className="DriverImg" src={props.DriverImg} />
    </div>
  );
}

export default DriverIcons;

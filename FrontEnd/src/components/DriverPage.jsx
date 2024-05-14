import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/DriverPage.css";

function DriverPage() {
  const { id } = useParams(); // Gets the parameter from the url...
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:3030/drivers/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDriver(data);
      })
      .catch((error) => {
        console.error("Error fetching individual driver data:", error);
      });
  }, [id]);
  return (
    <div>
      {driver && (
        <div className="driverPageContainer">
          <div className="driverInfo">
            <img
              className="driverProfilePic"
              src={driver.driver_pic_url}
              alt={driver.name}
            />
            <h2>{driver.name}</h2>
            <p>{driver.f1_team}</p>{" "}
          </div>

          <div>
            <img className="carPic1" src={driver.driver_car_pic} />
          </div>
        </div>
      )}
    </div>
  );
}

export default DriverPage;

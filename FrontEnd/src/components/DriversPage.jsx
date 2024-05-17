import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DriverIcons from "./DriverIcons";
import "../assets/css/DriversPage.css";

function DriversPage() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    // Fetch all             tracks data from your backend API
    fetch("http://127.0.0.1:3030/drivers") // Assuming your backend API endpoint for fetching all tracks is "/tracks"
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDrivers(data);
      })
      .catch((error) => {
        console.error("Error fetching track data:", error);
      });
  }, []);

  return (
    <div className="DriversPageDiv">
      {drivers.map((driver) => (
        <Link
          className="DriversLink"
          key={driver.driver_id}
          to={`/drivers/${driver.driver_id}`}
        >
          <DriverIcons
            key={driver.driver_id}
            driverName={driver.driver_name}
            team={driver.f1_team}
            DriverImg={driver.driver_pic1}
          />
        </Link>
      ))}
    </div>
  );
}

export default DriversPage;

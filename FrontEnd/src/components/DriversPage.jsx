import { useState, useEffect } from "react";
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
    <div className="DriverPageDiv">
      {drivers.map((driver) => (
        <DriverIcons
          key={driver.driver_id}
          driverName={driver.driver_name}
          team={driver.f1_team}
          DriverImg={driver.driver_pic1}
        />
      ))}
    </div>
  );
}

export default DriversPage;

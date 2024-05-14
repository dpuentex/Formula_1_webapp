import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/TeamPage.css";

function TeamPage() {
  const { id } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:3030/teams/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTeam(data);
      })
      .catch((error) => {
        console.error("Error fetching individual team data:", error);
      });
  }, [id]);

  return (
    <div>
      {team && (
        <div className="TeamContainer">
          <header className="teamHeader">
            <img
              className="teamHeaderimg"
              src={team.car_pic2}
              alt="Team Car Header"
            />
          </header>
          <div className="TeamData">
            <h2>{team.team_name}</h2>
            <p>{team.nationality}</p>
            <p>Engine Make: {team.engine_make}</p>
            <p>Year Founded: {team.founded_year}</p>
            <p>Grand Prix Wins: {team.gp_wins}</p>
            <p>Constructors Championship: {team.constructors_titles}</p>
            <p>Drivers Championship: {team.driver_titles}</p>
          </div>
          <div className="TeamImage">
            <img src={team.car_pic} />
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamPage;

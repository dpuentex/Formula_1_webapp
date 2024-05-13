import TeamIcons from "./TeamIcons";
import { useEffect, useState } from "react";

function TeamsPage() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch all             tracks data from your backend API
    fetch("http://127.0.0.1:3030/teams") // Assuming your backend API endpoint for fetching all tracks is "/tracks"
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTeams(data);
      })
      .catch((error) => {
        console.error("Error fetching track data:", error);
      });
  }, []);

  return (
    <div>
      {teams.map((team) => (
        <TeamIcons key={team.team_id} teamName={team.team_name} />
      ))}
    </div>
  );
}

export default TeamsPage;

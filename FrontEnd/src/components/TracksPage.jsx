import TrackIcons from "./TrackIcons";
import { useEffect, useState } from "react";

function TracksPage() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    // Fetch all             tracks data from your backend API
    fetch("http://127.0.0.1:3030/tracks") // Assuming your backend API endpoint for fetching all tracks is "/tracks"
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTracks(data);
      })
      .catch((error) => {
        console.error("Error fetching track data:", error);
      });
  }, []);

  return (
    <div>
      {tracks.map((track) => (
        <TrackIcons key={track.track_id} gpName={track.gp_name} />
      ))}
    </div>
  );
}

export default TracksPage;

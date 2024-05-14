import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/TrackPage.css";

function TrackPage() {
  const { id } = useParams();
  const [track, setTrack] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:3030/tracks/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network was not okay");
        }
        return response.json();
      })
      .then((data) => {
        setTrack(data);
      })
      .catch((error) => {
        console.error("Error fetching individual tracks", error);
      });
  }, [id]);
  return (
    <div>
      {track && (
        <div className="trackPageContainer">
          <img className="trackHeaderimg" src={track.gp_header_pic} />
          <h2>{track.track_name}</h2>
          <p>{track.gp_name}</p>
        </div>
      )}
    </div>
  );
}

export default TrackPage;

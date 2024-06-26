import DriversPage from "./DriversPage";
import TeamsPage from "./TeamsPage";
import TracksPage from "./TracksPage";
import TrackPage from "./TrackPage";
import DriverPage from "./DriverPage";
import TeamPage from "./TeamPage";
import Shop from "./ShopPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/css/MainBody.css";
function MainBody() {
  return (
    <>
      <div className="MainBodyDiv">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<div>⛔️🚧F1 HOME is UNDERCONSTRUCTION🚧⛔️</div>}
            />
            <Route path="/tracks" element={<TracksPage />} />
            <Route path="/tracks/:id" element={<TrackPage />} />
            <Route path="/drivers" element={<DriversPage />} />
            <Route path="/drivers/:id" element={<DriverPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/teams/:id" element={<TeamPage />} />
            <Route path="/shopf1" element={<Shop />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default MainBody;

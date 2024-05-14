import DriversPage from "./DriversPage";
import TeamsPage from "./TeamsPage";
import TracksPage from "./TracksPage";
import TrackPage from "./TrackPage";
import DriverPage from "./DriverPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function MainBody() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div>home</div>} />
          <Route path="/tracks" element={<TracksPage />} />
          <Route path="/tracks/:id" element={<TrackPage />} />
          <Route path="/drivers" element={<DriversPage />} />
          <Route path="/drivers/:id" element={<DriverPage />} />
          <Route path="/teams" element={<TeamsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default MainBody;

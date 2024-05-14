import "../assets/css/Header.css";
function Header() {
  return (
    <div className="header-div">
      <img
        className="header-logo"
        src="https://www.formula1.com/etc/designs/fom-website/social/f1-default-share.jpg"
        alt=""
      />
      <nav className="top-nav">
        <ul>
          <li>
            <a href="/" className="btn btn-border-underline">
              HOME
            </a>
          </li>
          <li>
            <a href="/teams" className="btn btn-border-underline">
              TEAMS
            </a>
          </li>
          <li>
            <a href="/drivers" className="btn btn-border-underline">
              DRIVERS
            </a>
          </li>
          <li>
            <a href="/tracks" className="btn btn-border-underline">
              TRACKS
            </a>
          </li>
          <li>
            <a href="/shopf1" className="btn btn-border-underline">
              SHOP
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

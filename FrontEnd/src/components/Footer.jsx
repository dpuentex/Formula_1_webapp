import "../assets/css/Footer.css";

function Footer() {
  return (
    <div className="footer-div">
      <img
        className="footer-logo"
        src="https://www.formula1.com/etc/designs/fom-website/social/f1-default-share.jpg"
        alt=""
      />
      <nav className="footer-nav">
        <ul>
          <li>
            <a href="#">
              <button className="btn btn-border-underline">Careers</button>
            </a>
          </li>
          <li>
            <a href="#">
              <button className="btn btn-border-underline">Contact Us</button>
            </a>
          </li>
          <li>
            <a href="#">
              <button className="btn btn-border-underline">Social Media</button>
            </a>
          </li>
          <li>
            <a href="#">
              <button className="btn btn-border-underline">
                Privacy Policy
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;

import { useEffect, useState } from "react";
import Img from "../assets/logo.png";
import Signin from "./Sign-in";
import { Link } from "react-router-dom";

function Navbar() {
  const [theme, setTheme] = useState("dark");
  function toggle() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.className = newTheme + "-theme";
  }

  const [showSignin, setShowSignin] = useState(false);
  return (
    <>
      <div className="nav">
        <div className="left-section">
          <img src={Img} alt="" className="logo" />
        </div>
        <div className="right-section">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to="/about">Latest News</Link>
            </li>
            <li>
              <Link to="/organize-event">Organize An Event</Link>
            </li>

            <button onClick={() => setShowSignin(true)}>Join Now !</button>
            <button onClick={toggle}>
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
              {/* {theme === "dark" ? "Light Mode" : "Dark Mode"} */}
            </button>
          </ul>
        </div>
      </div>

      {showSignin && <Signin setShowSignin={setShowSignin} />}
    </>
  );
}

export default Navbar;

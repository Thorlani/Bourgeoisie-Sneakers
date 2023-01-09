import "./navbar.css";
import { useState } from "react";

const Navbar = (props: { shopNow: string; offer: string; top: string }) => {
  const [showNav, setShowNav] = useState(false);

  const link2 = props.shopNow;
  const link1 = props.offer;
  const link3 = props.top;

  return (
    <nav className="nav">
      <div onClick={() => setShowNav(!showNav)} className="menu">
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </div>
      <div className="logo">
        <div className="small">Bourgeoisie</div>
        <div className="big">Sneakers</div>
      </div>
      {showNav === true && (
        <div className="slider-container">
          <ul className="slider-content">
            <li className="homee">
              <a
                onClick={() => setShowNav(!showNav)}
                style={{ textDecoration: "none", color: "white" }}
                href={`${"#" + link3}`}
              >
                Home
              </a>
            </li>
            <li className="cartt">
              <a
                onClick={() => setShowNav(!showNav)}
                style={{ textDecoration: "none", color: "white" }}
                href={`${"#" + link2}`}
              >
                Shop Now
              </a>
            </li>
            <li className="whatt">
              <a
                onClick={() => setShowNav(!showNav)}
                style={{ textDecoration: "none", color: "white" }}
                href={`${"#offer"}`}
              >
                What we offer
              </a>
            </li>
          </ul>
          <div onClick={() => setShowNav(!showNav)} className="cancel">
            <div className="cancel-top"></div>
            <div className="cancel-bottom"></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

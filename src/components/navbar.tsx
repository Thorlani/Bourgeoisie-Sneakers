import "./navbar.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const shopNow = useSelector((state: any) => state.url.shopNow);
  const offer = useSelector((state: any) => state.url.offer);
  const top = useSelector((state: any) => state.url.top);

  const [showNav, setShowNav] = useState(false);

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
                href={`${"#" + top}`}
              >
                Home
              </a>
            </li>
            <li className="cartt">
              <a
                onClick={() => setShowNav(!showNav)}
                style={{ textDecoration: "none", color: "white" }}
                href={`${"#" + shopNow}`}
              >
                Shop Now
              </a>
            </li>
            <li className="whatt">
              <a
                onClick={() => setShowNav(!showNav)}
                style={{ textDecoration: "none", color: "white" }}
                href={`${"#" + offer}`}
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

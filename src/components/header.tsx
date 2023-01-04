import "./header.css";
import nike270 from "../assets/nike270.webp";
import waffles from "../assets/waffles.webp";
import legend from "../assets/legend.png";
import { useState } from "react";
import Categories from "./categories";

const Header = (id: { id: string }) => {
  const [num, setNum] = useState(0);

  const link = id.id;

  const increment = () => {
    if (num === 0) {
      setNum(num + 1);
    } else if (num === 1) {
      setNum(num + 1);
    } else {
      setNum(0);
    }
  };

  return (
    <div id="top" className="header">
      <div className="topp">
        <h1>Nike Collection</h1>
        <p className="pa">Nike original 2023</p>
      </div>
      <div className="container">
        <div className="left">
          <div className="height">
            <div className="shoe-name">
              {(num === 0 && <h2>Nike Air Max 270</h2>) ||
                (num === 1 && <h2>Nike Waffle One SE</h2>) ||
                (num === 2 && <h2>Nike Legend Essential</h2>)}
              <p className="para">Men's shoes</p>
            </div>
            <a href={`${"#" + link}`} className="btn">
              Shop now
            </a>
          </div>
        </div>
        <div className="right">
          {(num === 0 && (
            <img src={nike270} alt="Nike air max 270" className="shoe-image" />
          )) ||
            (num === 1 && (
              <img
                src={waffles}
                alt="Nike Waffle One SE"
                className="shoe-image"
              />
            )) ||
            (num === 2 && (
              <img
                src={legend}
                alt="Nike Legend Essential"
                className="shoe-image"
              />
            ))}
          <div onClick={increment} className="arrow">
            <div className="toppp"></div>
            <div className="middlee"></div>
            <div className="bottomm"></div>
          </div>
        </div>
      </div>
      <div className="stretch">
        <div className="ball-container">
          <div
            onClick={() => setNum(0)}
            style={{
              backgroundColor: `${num === 0 ? "burlywood" : "brown"}`,
            }}
            className="ball active-ball"
          ></div>
          <div
            onClick={() => setNum(1)}
            style={{ backgroundColor: `${num === 1 ? "burlywood" : "brown"}` }}
            className="ball active-balll"
          ></div>
          <div
            onClick={() => setNum(2)}
            style={{ backgroundColor: `${num === 2 ? "burlywood" : "brown"}` }}
            className="ball active-ballll"
          ></div>
        </div>
      </div>
      <div id="shopNow">
        <Categories />
      </div>
    </div>
  );
};

export default Header;

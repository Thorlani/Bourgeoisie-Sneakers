import "./header.css";
import { useState } from "react";
import Categories from "./categories";
import HeaderTop from "./HeaderComponent/headerTop";
import HeaderContainer from "./HeaderComponent/headerContainer";
import HeaderStretch from "./HeaderComponent/headerStretch";

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
      <HeaderTop />
      <HeaderContainer url={link} num={num} setNum={setNum} />
      <HeaderStretch num={num} setNum={setNum} />
      <Categories />
    </div>
  );
};

export default Header;

import "./header.css";
import { useState } from "react";
import Categories from "./categories";
import HeaderTop from "./HeaderComponent/headerTop";
import HeaderContainer from "./HeaderComponent/headerContainer";
import HeaderStretch from "./HeaderComponent/headerStretch";

const Header = () => {
  const [num, setNum] = useState(0);

  return (
    <div id="top" className="header">
      <HeaderTop />
      <HeaderContainer num={num} setNum={setNum} />
      <HeaderStretch num={num} setNum={setNum} />
      <Categories />
    </div>
  );
};

export default Header;

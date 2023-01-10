import { useSelector } from "react-redux";

const HeaderTop = () => {

  const payment = useSelector((state: any) => state.url.payment);
  const airmaxQty = useSelector((state: any) => state.shoes.airmax.quantity);
  const wafflesQty = useSelector((state: any) => state.shoes.waffles.quantity);
  const legendQty = useSelector((state: any) => state.shoes.legend.quantity);
  return (
    <div className="topp">
      <div>
        <h1>Nike Collection</h1>
        <p className="pa">Nike original 2023</p>
      </div>
      <a href={"#" + payment}>
        <div className="mycart">
          <div className="eyes">
            <div></div>
            <div></div>
          </div>
          <div className="smile"></div>
          <div className="num">
            <p>{airmaxQty + legendQty + wafflesQty}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default HeaderTop;

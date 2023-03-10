import "./categories.css";
import { useState } from "react";
import nike270 from "../assets/nike270.webp";
import waffles from "../assets/waffles.webp";
import legend from "../assets/legend.png";
import { useDispatch, useSelector } from "react-redux";
import { legendOrder, airmaxOrder, wafflesOrder } from "../redux/shoeAction";

const Categories = () => {
  const airmaxPrice = useSelector((state: any) => state.shoes.airmax.itemPrice);
  const wafflesPrice = useSelector(
    (state: any) => state.shoes.waffles.itemPrice
  );
  const legendPrice = useSelector((state: any) => state.shoes.legend.itemPrice);

  const [num, setNum] = useState(0);

  type collectionDetails = [
    {
      name: string;
      itemPrice: number;
      imgSrc: string;
    },
    {
      name: string;
      itemPrice: number;
      imgSrc: string;
    },
    {
      name: string;
      itemPrice: number;
      imgSrc: string;
    }
  ];

  const collections: collectionDetails = [
    {
      name: "Nike Legend Essential",
      itemPrice: legendPrice,
      imgSrc: legend,
    },
    {
      name: "Nike Air Max 270",
      itemPrice: airmaxPrice,
      imgSrc: nike270,
    },
    {
      name: "Nike Waffle One SE",
      itemPrice: wafflesPrice,
      imgSrc: waffles,
    },
  ];

  // const randomItem = collections[Math.floor(Math.random() * collections.length)]

  const dispatch = useDispatch();

  return (
    <>
      <div id="shopNow" className="wrap">
        <div
          onClick={() => setNum(0)}
          className={`${num === 0 ? "title lifestyle-active" : "title"}`}
        >
          <h3>Lifestyle</h3>
        </div>
        <div
          onClick={() => setNum(1)}
          className={`${num === 1 ? "title running-active" : "title"}`}
        >
          <h3>Running</h3>
        </div>
        <div
          onClick={() => setNum(2)}
          className={`${num === 2 ? "title tennis-active" : "title"}`}
        >
          <h3>Tennis</h3>
        </div>
        <div
          onClick={() => setNum(3)}
          className={`${num === 3 ? "title basketball-active" : "title"}`}
        >
          <h3>Basketball</h3>
        </div>
      </div>
      <div>
        <ul
          style={{ display: `${num === 0 ? "flex" : "none"}` }}
          className="boxes lifestyle"
        >
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[0].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[0].imgSrc}
              alt={collections[0].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[0].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(legendOrder())} className="arroww">
                <p className="mid">Buy</p>
              </div>
            </div>
          </li>
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[1].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[1].imgSrc}
              alt={collections[1].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[1].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(airmaxOrder())} className="arroww">
              <p className="mid">Buy</p>
              </div>
            </div>
          </li>
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[2].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[2].imgSrc}
              alt={collections[2].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[2].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(wafflesOrder())} className="arroww">
                <p className="mid">Buy</p>
              </div>
            </div>
          </li>
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[0].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[0].imgSrc}
              alt={collections[0].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[0].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(legendOrder())} className="arroww">
                <p className="mid">Buy</p>
              </div>
            </div>
          </li>
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[1].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[1].imgSrc}
              alt={collections[1].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[1].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(airmaxOrder())} className="arroww">
                <p className="mid">Buy</p>
              </div>
            </div>
          </li>
        </ul>
        <ul
          style={{ display: `${num === 1 ? "flex" : "none"}` }}
          className="boxes lifestyle"
        >
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[1].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[1].imgSrc}
              alt={collections[1].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[1].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(airmaxOrder())} className="arroww">
                <p className="mid">Buy</p>
              </div>
            </div>
          </li>
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[0].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[0].imgSrc}
              alt={collections[0].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[0].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(legendOrder())} className="arroww">
                <p className="mid">Buy</p>
              </div>
            </div>
          </li>
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[2].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[2].imgSrc}
              alt={collections[2].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[2].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(wafflesOrder())} className="arroww">
                <p className="mid">Buy</p>
              </div>
            </div>
          </li>
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[0].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[0].imgSrc}
              alt={collections[0].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[0].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(legendOrder())} className="arroww">
                <p className="mid">Buy</p>
              </div>
            </div>
          </li>
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[1].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[1].imgSrc}
              alt={collections[1].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[1].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(airmaxOrder())} className="arroww">
                <p className="mid">Buy</p>
              </div>
            </div>
          </li>
        </ul>
        <ul
          style={{ display: `${num === 2 ? "flex" : "none"}` }}
          className="boxes lifestyle"
        >
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[2].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[2].imgSrc}
              alt={collections[2].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[2].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(wafflesOrder())} className="arroww">
                <p className="mid">Buy</p>
              </div>
            </div>
          </li>
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[0].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[0].imgSrc}
              alt={collections[0].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[0].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(legendOrder())} className="arroww">
                <p className="mid">Buy</p>
              </div>
            </div>
          </li>
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[2].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[2].imgSrc}
              alt={collections[2].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[2].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(wafflesOrder())} className="arroww">
                <p className="mid">Buy</p>
              </div>
            </div>
          </li>
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[1].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[1].imgSrc}
              alt={collections[1].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[1].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(airmaxOrder())} className="arroww">
                <p className="mid">Buy</p>
              </div>
            </div>
          </li>
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[0].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[0].imgSrc}
              alt={collections[0].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[0].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(legendOrder())} className="arroww">
                <p className="mid">Buy</p>
              </div>
            </div>
          </li>
        </ul>
        <ul
          style={{ display: `${num === 3 ? "flex" : "none"}` }}
          className="boxes lifestyle"
        >
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[0].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[0].imgSrc}
              alt={collections[0].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[0].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(legendOrder())} className="arroww">
                <p className="mid">Buy</p>
              </div>
            </div>
          </li>
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[1].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[1].imgSrc}
              alt={collections[1].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[1].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(airmaxOrder())} className="arroww">
                <p className="mid">Buy</p>
              </div>
            </div>
          </li>
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[2].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[2].imgSrc}
              alt={collections[2].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[2].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(wafflesOrder())} className="arroww">
                <p className="mid">Buy</p>
              </div>
            </div>
          </li>
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[0].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[0].imgSrc}
              alt={collections[0].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[0].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(legendOrder())} className="arroww">
                <p className="mid">Buy</p>
              </div>
            </div>
          </li>
          <li className="box-items">
            <div className="item-title">
              <h3 style={{ color: "white" }}>{collections[1].name}</h3>
              <div></div>
            </div>
            <img
              src={collections[1].imgSrc}
              alt={collections[1].name}
              width={80}
              height={80}
              className="categories-image"
            />
            <div
              style={{
                zIndex: 98,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <h4 style={{ fontSize: "large" }}>
                  N{collections[1].itemPrice}
                </h4>
                <p style={{ fontSize: "small" }}>price</p>
              </div>
              <div onClick={() => dispatch(airmaxOrder())} className="arroww">
                <p className="mid">Buy</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Categories;

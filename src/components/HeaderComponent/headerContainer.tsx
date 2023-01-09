import nike270 from "../../assets/nike270.webp";
import waffles from "../../assets/waffles.webp";
import legend from "../../assets/legend.png";

const HeaderContainer = (props: { url: string; num: number; setNum: any }) => {
  const increment = () => {
    if (props.num === 0) {
      props.setNum(props.num + 1);
    } else if (props.num === 1) {
      props.setNum(props.num + 1);
    } else {
      props.setNum(0);
    }
  };
  return (
    <div className="container">
      <div className="left">
        <div className="height">
          <div className="shoe-name">
            {(props.num === 0 && <h2>Nike Air Max 270</h2>) ||
              (props.num === 1 && <h2>Nike Waffle One SE</h2>) ||
              (props.num === 2 && <h2>Nike Legend Essential</h2>)}
            {/* <p className="para">Men's shoes</p> */}
          </div>
          <a href={`${"#" + props.url}`} className="btn">
            Shop now
          </a>
        </div>
      </div>
      <div className="right">
        {(props.num === 0 && (
          <img src={nike270} alt="Nike air max 270" className="shoe-image" />
        )) ||
          (props.num === 1 && (
            <img
              src={waffles}
              alt="Nike Waffle One SE"
              className="shoe-image"
            />
          )) ||
          (props.num === 2 && (
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
  );
};

export default HeaderContainer;

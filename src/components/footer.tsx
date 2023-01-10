import { useSelector } from "react-redux";

const Footer = () => {
  const shopNow = useSelector((state: any) => state.url.shopNow);
  const offer = useSelector((state: any) => state.url.offer);
  const top = useSelector((state: any) => state.url.top);
 
  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        backgroundColor: "brown",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "5% 15%",
      }}
    >
      <div style={{ color: "white", marginBottom: "20px" }}>
        <div className="small">Bourgeoisie</div>
        <div className="big">Sneakers</div>
      </div>
      <ul style={{ color: "white" }}>
        <li style={{ marginBottom: "20px", listStyle: "none" }}>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href={`${"#" + offer}`}
          >
            What we offer
          </a>
        </li>
        <li style={{ marginBottom: "20px", listStyle: "none" }}>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href={`${"#" + shopNow}`}
          >
            Shop now
          </a>
        </li>
        <li style={{ marginBottom: "20px", listStyle: "none" }}>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href={`${"#" + top}`}
          >
            Go to Home
          </a>
        </li>
        <li style={{ marginBottom: "20px", listStyle: "none" }}>
          © 2023 Bourgeoisie Sneakers. All Rights Reserved.
        </li>
      </ul>
    </div>
  );
};

export default Footer;

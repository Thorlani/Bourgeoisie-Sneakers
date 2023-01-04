const Footer = (shopNow: { shopNow: string; offer: string; top: string }) => {

  const link2 = shopNow.shopNow;
  const link1 = shopNow.offer;
  const link3 = shopNow.top;
  
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
            href={`${"#" + link1}`}
          >
            What we offer
          </a>
        </li>
        <li style={{ marginBottom: "20px", listStyle: "none" }}>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href={`${"#" + link2}`}
          >
            Shop now
          </a>
        </li>
        <li style={{ marginBottom: "20px", listStyle: "none" }}>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href={`${"#" + link3}`}
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

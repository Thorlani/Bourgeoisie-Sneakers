import "./offer.css";

const Offer = (offer: {offer: string}) => {

  const link = offer.offer
  type offers = {
    h2: string;
    p: string;
  };

  const offerDetails: offers = {
    h2: "What we offer",
    p: "Bourgeiose Sneakers gives the very best price when it comes to Nike product you are willing to buy. Such product can range from footwear, apparel, accessories, equipment, and other services. In addition to the above, you stand a chance to get 50% discount on the delivery of any item you order from us.",
  };
  return (
    <div
      id={link}
      style={{
        width: "100%",
        height: "fit-content",
        padding: "0% 15%",
        textAlign: "center",
        marginBottom: "40px",
      }}
    >
      <h2 style={{ color: "brown" }}>{offerDetails.h2}</h2>
      <p
        style={{
          marginTop: "20px",
          color: "brown",
          width: "100%",
          padding: "0% 20%",
        }}
      >
        {offerDetails.p}
      </p>
    </div>
  );
};

export default Offer;

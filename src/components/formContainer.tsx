import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usePaystackPayment } from "react-paystack";
import "./formContainer.css";
import {
  cancelAirmaxOrder,
  cancelWafflesOrder,
  cancelLegendOrder,
} from "../redux/shoeAction";

const FormContainer = () => {
  const payment = useSelector((state: any) => state.url.payment);

  const airmaxPrice = useSelector((state: any) => state.shoes.airmax.itemPrice);
  const airmaxQty = useSelector((state: any) => state.shoes.airmax.quantity);
  const wafflesPrice = useSelector(
    (state: any) => state.shoes.waffles.itemPrice
  );
  const wafflesQty = useSelector((state: any) => state.shoes.waffles.quantity);
  const legendPrice = useSelector((state: any) => state.shoes.legend.itemPrice);
  const legendQty = useSelector((state: any) => state.shoes.legend.quantity);

  const airmax = airmaxPrice * airmaxQty;
  const waffles = wafflesPrice * wafflesQty;
  const legend = legendPrice * legendQty;

  const totalAmount = airmax + waffles + legend;

  type dataContent = {
    email: string;
  };

  const [data, setData] = useState<dataContent>({
    email: "",
  });

  const config = {
    reference: new Date().getTime().toString(),
    email: data.email,
    amount: totalAmount * 100,
    publicKey: "pk_test_12b0dffff067195496aa30c77fab55d95be53818",
  };

  const onSuccess = () => {
    let message = "Payment complete!";
    alert(message);
  };

  const onClose = () => {
    alert("Window closed.");
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <button
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Pay now
        </button>
      </div>
    );
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  return (
    <div id={payment} className="header form-area">
      <h3>Payment</h3>
      <div>
        <p>
          You currently have {airmaxQty + wafflesQty + legendQty} item
          {airmaxQty + wafflesQty + legendQty > 1 && "s"} in your cart
        </p>
        <div className="orderr">
          {legendQty > 0 && (
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "220px",
                marginBottom: "10px",
              }}
            >
              <li className="list-itemm">
                Nike Legend Essential x {legendQty}
              </li>
              <button
                onClick={() => dispatch(cancelLegendOrder())}
                style={{ fontSize: "x-small", width: "50px" }}
              >
                remove item
              </button>
            </ul>
          )}
          {airmaxQty > 0 && (
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "220px",
                marginBottom: "10px",
              }}
            >
              <li className="list-itemm">Nike Air Max 270 x {airmaxQty}</li>
              <button
                onClick={() => dispatch(cancelAirmaxOrder())}
                style={{ fontSize: "x-small", width: "50px" }}
              >
                remove item
              </button>
            </ul>
          )}
          {wafflesQty > 0 && (
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "220px",
                marginBottom: "10px",
              }}
            >
              <li className="list-itemm">Nike Waffle One SE x {wafflesQty}</li>
              <button
                onClick={() => dispatch(cancelWafflesOrder())}
                style={{ fontSize: "x-small", width: "50px" }}
              >
                remove item
              </button>
            </ul>
          )}
        </div>
      </div>
      <form onSubmit={() => {}}>
        <div className="amount">
          <label htmlFor="Amount">Amount to be paid (NGN)</label>
          <p>{totalAmount}</p>
        </div>
        <div className="email">
          <label htmlFor="Email">Purchaser's Email</label>
          <input
            type="email"
            required
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        {totalAmount === 0 ? (
          <button
            type="button"
            style={{
              backgroundColor: "white",
              color: "brown",
              border: "1px solid brown",
            }}
          >
            Purchase an item
          </button>
        ) : (
          <PaystackHookExample />
        )}
      </form>
    </div>
  );
};

export default FormContainer;

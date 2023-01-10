export const handlePayment = (email: string, amount: number) => {
  const handler = PaystackPop.setup({
    key: "pk_test_12b0dffff067195496aa30c77fab55d95be53818",
    email,
    amount: amount * 100,
    onClose: function () {
      alert("Window closed.");
    },
    callback: function (response: { reference: string; }) {
      let message = "Payment complete! Reference: " + response.reference;
      alert(message);
    },
  });

  handler.openIframe();
};

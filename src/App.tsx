import { useSelector } from "react-redux/es/exports";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Offer from "./components/offer";

function App() {
  const { shopNow } = useSelector((state: any) => state.counter);
  const { offer } = useSelector((state: any) => state.counter);
  const { top } = useSelector((state: any) => state.counter);

  
  
  return (
    <>
      <Navbar shopNow={shopNow} offer={offer} top={top} />
      <Header id={shopNow} />
      <Offer offer={offer} />
      <Footer shopNow={shopNow} offer={offer} top={top} />
    </>
  );
}

export default App;

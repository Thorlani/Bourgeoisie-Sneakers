import "./App.css";
import Footer from "./components/footer";
import FormContainer from "./components/formContainer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Offer from "./components/offer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <FormContainer />
      <Offer />
      <Footer />
    </>
  );
}

export default App;

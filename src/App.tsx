import "./App.css";
import BodyContainer from "./layout/BodyContainer";
import Modal from "react-modal";

function App() {
  return (
    <>
      <BodyContainer />
    </>
  );
}

Modal.setAppElement("#root");

export default App;

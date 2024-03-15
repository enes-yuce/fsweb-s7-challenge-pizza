import Home from "./PizzaOrder/Home";
import Onay from "./PizzaOrder/Onay";
import { BrowserRouter, Route, Routes } from "react-router-dom/";
import PizzaOrderForm from "./PizzaOrder/PizzaOrderForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Siparis" element={<PizzaOrderForm />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Onay" element={<Onay />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

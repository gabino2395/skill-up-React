import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";
function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
        <Route path="/detalle" element={<Detalle />} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

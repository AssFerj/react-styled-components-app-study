import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Contato from "../pages/Contato";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Sobre from "../pages/Sobre";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Sobre />} />
        <Route path="/contact" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

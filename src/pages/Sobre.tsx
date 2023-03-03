import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Foto from "../assets/images/Assis.jpg";
import TitlePage from "../components/title-page/TitlePageStyled";
import Div from "../components/Div/DivStyled";
import Span from "../components/LinkBack/LinkBackStyled";
import Nav from "../components/Nav/Nav";
import { Link } from "react-router-dom";
import Logout from "../components/Logout/LogoutStyled";

const Sobre: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar>
        <Nav />
      </NavBar>
      <Div>
        <TitlePage>Sobre</TitlePage>
        <img src={Foto} alt="Assis Junior" />
        <Span>Dev Web FullStack em formação pela Growdev.</Span>
        <Link to="/">
          <Logout type="button">Sair</Logout>
        </Link>
      </Div>
    </React.Fragment>
  );
};

export default Sobre;

import React from "react";
import Foto from "../assets/images/Assis.jpg";
import TitlePage from "../components/title-page/TitlePageStyled";
import NavBar from "../components/NavBar/NavBar";
import Div from "../components/Div/DivStyled";
import Span from "../components/LinkBack/LinkBackStyled";
import Nav from "../components/Nav/Nav";
import Logout from "../components/Logout/LogoutStyled";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar>
        <Nav />
      </NavBar>
      <Div>
        <TitlePage>Bem vindo(a)!</TitlePage>
        <img src={Foto} alt="Assis Junior" />
        <Span>Olá, sou Assis.</Span>
        <Link to="/">
          <Logout type="button">Sair</Logout>
        </Link>
      </Div>
    </React.Fragment>
  );
};

export default Home;

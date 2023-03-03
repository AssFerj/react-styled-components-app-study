import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form/FormStyled";
import Input from "../components/Input/InputStyled";
import Button from "../components/Button/ButtonStyled";
import TitlePage from "../components/title-page/TitlePageStyled";
import Span from "../components/LinkBack/LinkBackStyled";

const Login: React.FC = () => {
  return (
    <React.Fragment>
      <Form>
        <TitlePage>Login</TitlePage>
        <Input type="email" placeholder="Digite seu e-mail" />
        <Input type="password" placeholder="Digite sua senha" />
        <Link to="/home">
          <Button type="button">Login</Button>
        </Link>
        <Span>
          Criar{" "}
          <Link className="link-back" to="/cadastro">
            Conta
          </Link>
        </Span>
      </Form>
    </React.Fragment>
  );
};

export default Login;

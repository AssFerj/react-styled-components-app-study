import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/ButtonStyled";
import Form from "../components/Form/FormStyled";
import Input from "../components/Input/InputStyled";
import Span from "../components/LinkBack/LinkBackStyled";
import TitlePage from "../components/title-page/TitlePageStyled";

interface CadastroProps {
  title?: string;
}

const Cadastro: React.FC<CadastroProps> = ({ title }) => {
  return (
    <React.Fragment>
      <Form>
        <TitlePage>Cadastro</TitlePage>
        <Input type="email" placeholder="Digite seu e-mail" />
        <Input type="password" placeholder="Digite sua senha" />
        <Input type="password" placeholder="Confirme sua senha" />
        <Link to="/home">
          <Button type="button">Cadastrar</Button>
        </Link>
        <Span>
          Voltar para{" "}
          <Link className="link-back" to="/">
            Login
          </Link>
        </Span>
      </Form>
    </React.Fragment>
  );
};

export default Cadastro;

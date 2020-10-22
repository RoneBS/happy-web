import React from 'react';
import { Link } from 'react-router-dom';
import  Checkbox  from '../../components/Checkbox';

import { BoxButton, ButtonBack, MainPage, Location, Logo, LoginBox, LinkBox, FormLogin } from '../Login/styles';
import { FiArrowLeft } from "react-icons/fi";

import '../../styles/pages/orphanage-login.css';

import landingImg from '../../images/logotipo.svg';

function Login() {
  return (
    <MainPage>
      <Logo>
        <img src={landingImg} alt="Happy" />
        <Location>
          <strong>Várzea Alegre</strong>
          <span>Ceará</span>
        </Location>
      </Logo>
      <LoginBox>
        <ButtonBack to="/">
          <FiArrowLeft size={26} color="#15C3D6" />
        </ButtonBack>
        
        <FormLogin>
          <h1>Fazer Login</h1>
          <label>E-mail </label>
          <input type="text" name="email" />
          <label>Senha </label>
          <input type="password" name="senha" />
          <LinkBox>
            <Checkbox />
            <label>Lembrar-me</label>
            <Link to="/ForgotPass">Esqueci minha senha</Link>
          </LinkBox>
          <BoxButton>
            <button type="submit">Entrar</button>
          </BoxButton>
        </FormLogin>
      </LoginBox>
    </MainPage>
  );
}

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';
import Template from '../Template';

import { LoginBox, FormLogin, BoxButton, ButtonBack } from './styles';
import Checkbox from '../../components/Checkbox';
import { FiArrowLeft } from "react-icons/fi";

function ForgotPass() {
  return (

    <Template>
      <LoginBox>
        <ButtonBack to="/login">
          <FiArrowLeft size={26} color="#15C3D6" />
        </ButtonBack>
        <FormLogin>
          <h1>Esqueci a senha</h1>
          <h2>Sua definição de senha será enviada<br />
             para o email cadastrado</h2>
          <label>E-mail </label>
          <input type="text" name="email" />

          <BoxButton>
            <button type="submit">Entrar</button>
          </BoxButton>
        </FormLogin>
      </LoginBox>

    </Template>

  );
};

export default ForgotPass;

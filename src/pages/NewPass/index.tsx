import React from 'react';

import Template from '../Template';
import { LoginBox, FormLogin, BoxButton } from './styles';

function NewPass() {
  return (
    <Template>
      <LoginBox>
        <FormLogin>
          <h1>Redefinição de senha</h1>
          <h2>Escolha uma nova senha para você <br />
         acessar o dashboard do Happy </h2>
         <label>Nova senha</label>
         <input type="password" name="senha" />
         <label>Repetir senha</label>
         <input type="password" name="rsenha" />
         <BoxButton>
           <button>Entrar</button>
         </BoxButton>
        </FormLogin>
      </LoginBox>
    </Template>
  );
};

export default NewPass;

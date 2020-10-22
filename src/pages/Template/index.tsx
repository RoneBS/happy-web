import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Checkbox from '../../components/Checkbox';

import { BoxButton, ButtonBack, MainPage, Location, Logo, LoginBox, LinkBox, FormLogin } from '../Login/styles';
import { FiArrowLeft } from "react-icons/fi";

import '../../styles/pages/orphanage-login.css';

import landingImg from '../../images/logotipo.svg';

type templateProps = {
  children: ReactNode;
}

function Template({ children }: templateProps) {
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
        {children}
        
      </LoginBox>
    </MainPage>
  );
}

export default Template;
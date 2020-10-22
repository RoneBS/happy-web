import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { ContainerImg, Acces, Container, Wrapper, Location, Login, ButtonIndex } from './styles'

import logoImg from '../../images/logo.svg';

function Landing() {
  return (
    <Container>
      <Wrapper>
        <ContainerImg>
          <img src={logoImg} alt="Happy" />
          <Location>
            <strong>Várzea Alegre</strong>
            <span>Ceará</span>
          </Location>
        </ContainerImg>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>


        <Acces>
          <Login to="/login">Acesso restrito</Login>
        </Acces>


        <ButtonIndex to="/app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </ButtonIndex>
      </Wrapper>
    </Container>
  );
}

export default Landing;
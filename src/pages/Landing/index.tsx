import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Container, Wrapper, Location , ButtonIndex} from './styles'

import logoImg from '../../images/logo.svg';

function Landing() {
  return (
    <Container>
      <Wrapper>
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Várzea Alegre</strong>
          <span>Ceará</span>
        </Location>

        <ButtonIndex to="/app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </ButtonIndex>
      </Wrapper>
    </Container>
  );
}

export default Landing;
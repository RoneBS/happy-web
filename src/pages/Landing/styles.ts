import styled from 'styled-components';
import { Link } from 'react-router-dom'

import imgLanding from '../../images/landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  display: flex;
  justify-content: center;
  align-items: center; 
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 680px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  background: url(${imgLanding})no-repeat 80% center;

  main{
    max-width: 350px;

    h1 {
      font-size: 76px;
      font-weight: 900;
      line-height: 70px;
    }

    p {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
    }
  }
`;

export const ContainerImg = styled.div`
  display: flex;
`;


export const Location = styled.div`
  font-size: 24px;
  line-height: 34px;
  display: flex;
  margin-left: 64px;  
  flex-direction: column;
  text-align: left;

  strong {
    font-weight: 800;
  }

`;

export const Acces = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display:flex;
  flex-direction: column;
`;

export const Login = styled(Link)`

      
      width: 222px;
      height: 56px;
      
      border-radius: 20px;
      border: 0;
      background: #12D4E0;
      color: #FFF;
      text-decoration: none;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;

      &:hover {
        background: #96FEFF;
        color: #15C3D6
      }

    

`;

export const ButtonIndex = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background: #96FEFF;
  }
`;
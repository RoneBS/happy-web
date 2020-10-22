import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row; 
`;

export const Logo =styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  width: 60vw;
  height: 100%;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

`;

export const Location = styled.div`
  margin-top: 100px;
  font-size: 24px;
  line-height: 34px;
  display: flex;
  align-items:center;
  flex-direction: column;
  text-align: left;

  strong {
    font-weight: 800;
  }
`;

export const LoginBox = styled.div`
  width: 40vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FFFFFF; 

  h1 {
    width: 235px;
    height: 34px;
    font-size: 32px;
    color: rgba(92, 133, 153, 1);
    margin-left: 0;
    margin-bottom: 24px;
  }

  h2 {
    color: rgba(92, 133, 153, 1);
    font-size: 18px;
    margin-bottom: 20px;
    line-height: 28px;
  }

  label {
    margin-top: 40px;
    margin-bottom: 8px;
    color: rgba(143, 167, 178, 1);
  
  }

  input {
    border: 1px solid #D3E2E5;
    border-radius: 20px;
    background:rgba(245, 248, 250, 1);
    width: 360px;
    height: 64px;
    margin-bottom: 24px;
  
  }

`;

export const ButtonBack = styled(Link)`
  position: absolute;
  top: 40px;
  right: 43px;
  width: 48px;
  height: 48px;
  background: #EBF2F5;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background: #96FEFF;
  }


`;

export const FormLogin = styled.div`
  display: flex;
  flex-direction: column;

`;

// // export const Checkbox = styled.input.attrs({type:'checkbox'})`
// //     width: 24px;
// //     height: 24px;
// //     border: 1px solid #D3E2E5;
// //     border-radius: 5px;
// //     background: #F5F8FA;
// //     margin: 24px 16px 40px 1px;
    

// `;

export const BoxButton = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 360px;
    height: 64px;
    border-radius: 20px;
    border: none;
    background: #37C77F;
    color: #FFF;
    opacity: 0.5;

  }
  


`;
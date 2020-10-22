import styled from 'styled-components';

export const LoginBox = styled.div`
  width: 40vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FFFFFF; 

  h1 {
    width: 314px;
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
  
  }


`;

export const FormLogin = styled.div`
  display: flex;
  flex-direction: column;

`;

export const BoxButton = styled.div`
  display: flex;
  align-items: center;
  margin-top:24px;

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
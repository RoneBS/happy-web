import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    width: 24px;
    height: 24px;
    border: 1px solid #D3E2E5;
    border-radius: 50%;
    
    background: ${({checked})=> checked ? '#F5F8FA' : 'red'};
    `;



export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    outline-style: none;

`;
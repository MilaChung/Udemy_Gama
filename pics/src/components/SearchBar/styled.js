import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input` 
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    height: 3rem;
    padding: 0 .5rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button` 
    border: 1.5rem;
    border-radius: 0 .25rem .25rem 0;
    height: 3rem;
    background: #FA6576;
    color: white;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;
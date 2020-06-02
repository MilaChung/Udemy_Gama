import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
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


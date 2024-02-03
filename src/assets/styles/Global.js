import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        font-family: sans-serif;
    }
    body{
        background-color: ${({ theme }) => theme.colors.background};
        display: flex;
        justify-content: center;
    }
`;

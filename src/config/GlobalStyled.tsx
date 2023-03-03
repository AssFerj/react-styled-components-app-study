import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    body {
        color: aliceblue;
        background-color: #0c0c79;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        padding: 0;
        width: 100vw;
    }

    a {
        text-decoration: none;
        color: #ffffff;
    }

    .link-back{
        color: #0c0c79;
        font-weight: 600;
    }

    .link-back:hover {
        color: #368dff;
        transition: all 0.3s;
    }
`;
export default GlobalStyled;

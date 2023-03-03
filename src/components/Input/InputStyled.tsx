import styled from "styled-components";

const Input = styled.input`
  padding: 0.8rem;
  margin-top: 1rem;
  border: none;
  border-bottom: 1px solid #0c0c79;
  background-color: aliceblue;
  color: #0c0c79;

  &::-webkit-input-placeholder {
    color: #0c0c79;
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    color: #0c0c79;
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    color: #0c0c79;
  }

  &:-ms-input-placeholder {
    color: #0c0c79;
  }
`;
export default Input;

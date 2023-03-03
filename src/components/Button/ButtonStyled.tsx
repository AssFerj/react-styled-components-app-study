import styled from "styled-components";

const Button = styled.button`
  width: 15em;
  padding: 0.8rem 5rem;
  margin-top: 1rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  background-color: #0c0c79;
  color: aliceblue;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #2222b1;
    transition: all 0.3s;
  }
`;
export default Button;

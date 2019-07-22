import styled from "styled-components";
import { colors } from "../../assets/styles";

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  max-width: 600px;
  padding: 12px 20px;
  box-sizing: border-box;
  box-shadow: none;
  border: 2px solid ${colors.borderComment};
  border-radius: 4px;
  background-color: ${colors.textComment};
  resize: none;
  :focus {
    border: 2px solid ${colors.focusComment};
  }
`;

export { TextArea };

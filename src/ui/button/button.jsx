// Styled
import styled from "styled-components";
import { colors } from "../../assets/styles";

const Button = styled.button`
  background: ${colors.buttonsbgb};
  color:${colors.title_btnw};
  font-size: 1em;
  margin: 1em;
  border: 2px solid ${colors.buttons};
  border-radius: 15px;
  transition: background 0.7s ease;
  max-width: 200px;
  :hover {
    background:  ${colors.buttonsbgw};
    color: ${colors.title_btnb};;
  }
`;

const ButtonOnCard = styled(Button)`
  padding: 0.6em 0.7em;
`;

const SubmitButton = styled(Button)`
  padding: 0.25em 1.5em;
`;

export { Button, ButtonOnCard, SubmitButton };

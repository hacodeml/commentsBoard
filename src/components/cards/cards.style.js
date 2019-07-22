// Styled
import styled from "styled-components";
import { BaseContainer, colors } from "../../assets/styles";

// A new contaienr based on BaseContainer
const CardContainer = styled(BaseContainer)`
  padding: 1rem 0 1rem 0;
  border-bottom: 1.5px solid ${colors.borderCard};
  p {
    width:80%;
    text-align: justify;
    display: block;
    padding: 0 1rem 0 1rem;
    overflow-wrap: break-word;
  }
`;

export { CardContainer };

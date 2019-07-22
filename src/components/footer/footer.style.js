import styled from "styled-components";
import { BaseContainer, fontBold, colors } from "../../assets/styles";

const FooterLayout = styled.footer`
  height: 10vh;
`;

const FooterStyle = styled(BaseContainer)`
  background: ${colors.bg};
  color: ${colors.title};
  a {
    padding-left: 0.25rem;
    color: ${colors.title};
    font-weight: ${fontBold.bold};
    text-decoration: none;
  }
`;

export { FooterLayout, FooterStyle };

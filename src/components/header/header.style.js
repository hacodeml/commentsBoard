import styled from "styled-components";
import { BaseContainer } from "../../assets/styles";
import {fontSize, fontBold, colors} from '../../assets/styles';

const HeaderLayout = styled.header`
  height: 10vh;
`;

const HeaderStyle = styled(BaseContainer)`
  font-weight: ${fontBold.bold};
  font-size: ${fontSize.title};
  background: ${colors.bg};
  color: ${colors.title};
`;

export { HeaderLayout, HeaderStyle };

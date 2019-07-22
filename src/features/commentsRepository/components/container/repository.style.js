// Styled
import styled from "styled-components";
import { BaseContainer, fontBold, fontSize } from "../../../../assets/styles";

// A new contaienr based on BaseContainer
const Comments = styled(BaseContainer)`
  padding-top: 2.5rem;
  flex-direction: column;
`;

const RepositoryContainer = styled(BaseContainer)`
  flex-direction: column;
  max-width: 600px;
  margin: auto;
`;

const RepositoryTitle = styled.h1`
  display: block;
  width: 100%;
  font-weight: ${fontBold.bold};
  font-size: ${fontSize.title};
`;

export { Comments, RepositoryTitle, RepositoryContainer };

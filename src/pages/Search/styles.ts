import { styled } from 'styled-components';

export const PageContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 460px;
  background-color: rgb(37, 37, 37);

  @media screen and (max-width: 890px) {
    & {
      flex-direction: column;
      height: auto;
    }
  }
`;

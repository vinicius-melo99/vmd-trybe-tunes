import { styled } from 'styled-components';

export const Content = styled.section`
  display: flex;
  width: 82%;
  /* height: 100vh; */
  flex-direction: column;
  /* background-color: green; */

  @media screen and (max-width: 890px) {
    & {
      width: 100%;
      /* background-color: red; */
    }
  }
`;

import { styled } from 'styled-components';

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% / 4);

  img {
    height: 80px;
  }

  @media screen and (max-width: 890px) {
    & {
      /* width: 100%;s */
      flex-direction: row;
    }

    & img {
      /* width: 100%;s */
      height: 60px;
    }
  }
`;

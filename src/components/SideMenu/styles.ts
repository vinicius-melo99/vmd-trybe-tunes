import { styled } from 'styled-components';

export const MenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 18%;
  max-width: 310px;
  height: 100%;
  overflow-x: hidden;
  background-color: #1a1a1a;

  section:nth-of-type(2) {
    flex-grow: 3;
  }

  section:nth-of-type(1),
  section:nth-of-type(3) {
    padding: 10px;
  }

  section:nth-of-type(3) {
    justify-content: end;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 890px) {
    & {
      width: 100%;
      min-width: 100%;
      flex-direction: row;
      align-items: center;
      height: auto;
      /* overflow-x: auto; */

      & section:nth-of-type(2) {
        flex-grow: 2;
        flex-direction: row;
      }
    }
  }
`;

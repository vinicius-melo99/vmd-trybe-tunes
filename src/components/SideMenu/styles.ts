import { styled } from 'styled-components';

export const MenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  position: fixed;
  top: 0;

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
`;

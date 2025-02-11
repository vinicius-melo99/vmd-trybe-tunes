import { styled } from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    width: auto;
    height: auto;
  }

  @media screen and (max-width: 890px) {
    & {
      display: none;
      /* width: 100%;s */
      /* flex-direction: row; */
    }
  }
`;

export const Box = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  gap: 5px;
  background-color: #205fe5;
  color: white;
  font-size: 18px;
  border-radius: 20px;
  overflow-x: hidden;
  animation: test 0.4s;

  svg {
    min-height: 38px;
    min-width: 38px;
  }

  img {
    height: 34px;
    width: 34px;
    margin: 3px 0px 3px 3px;
    border-radius: 50%;
  }

  @keyframes test {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

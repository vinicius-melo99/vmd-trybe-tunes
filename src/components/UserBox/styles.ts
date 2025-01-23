import { styled } from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    width: auto;
    height: auto;
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
  /* padding: 10px; */
  border-radius: 20px;
  overflow-x: hidden;
  animation: test 0.4s;

  svg {
    min-height: 38px;
    min-width: 38px;
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

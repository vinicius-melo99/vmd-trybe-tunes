import styled from 'styled-components';

export const Albums = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80vh;
  overflow-y: auto;
  flex-wrap: wrap;
  color: white;
  gap: 30px;
  padding: 100px 2%;

  > img {
    width: 64px;
    height: 64px;
  }
`;

export const AlbumCard = styled.div`
  display: flex;
  flex-direction: column;
  width: calc((100% / 4) - 40px);
  overflow-x: auto;
  gap: 20px;
  cursor: pointer;
  transition: 300ms;
  animation: card-animation 0.5s ease-in-out;

  &:hover {
    transform: scale(1.07);
  }

  img {
    width: 100%;
    border-radius: 20px;
  }

  h3 {
    font-size: 14px;
  }

  p {
    font-size: 12px;
  }

  @keyframes card-animation {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 770px) {
    & {
      /* width: 100%;s */
      /* flex-direction: row; */
      width: calc((100% / 3) - 30px);
    }
  }

  @media screen and (max-width: 550px) {
    & {
      /* width: 100%;s */
      /* flex-direction: row; */
      width: calc((100% / 2) - 25px);
    }
  }
`;

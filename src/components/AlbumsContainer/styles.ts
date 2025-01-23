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
`;

export const AlbumCard = styled.div`
  display: flex;
  flex-direction: column;
  width: calc((100% / 4) - 40px);
  /* height: auto; */
  overflow-x: auto;
  gap: 20px;
  animation: card-animation 0.5s ease-in-out;
  /* background-color: red; */

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
`;

import styled from 'styled-components';

export const Songs = styled.div`
  display: flex;
  width: 100%;
  height: 75vh;
  /* overflow-y: auto; */
  flex-wrap: wrap;
  color: white;
`;

export const AlbumPictureContainer = styled.div`
  display: flex;
  width: 35%;
  height: 100%;
  justify-content: center;
  padding: 0px 2%;
  position: relative;
`;

export const AlbumSongsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  width: 65%;
  height: 100%;
  overflow-y: auto;
  padding: 20px 2%;

  audio {
    width: 80%;
    margin-bottom: 10px;
  }
`;

export const Picture = styled.img`
  width: 240px;
  height: 240px;
  position: absolute;
  top: -60px;
  border-radius: 12px;
  -webkit-box-shadow: -10px 7px 10px 1px rgba(15, 15, 15, 1);
  -moz-box-shadow: -10px 7px 10px 1px rgba(15, 15, 15, 1);
  box-shadow: -10px 7px 10px 1px rgba(15, 15, 15, 1);
  border: 7px solid rgba(255, 255, 255, 0.07);
`;

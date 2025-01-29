import styled from 'styled-components';

export const AlbumHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;

  > div {
    position: absolute;
    left: 35%;
    bottom: 0px;
    display: flex;
    flex-direction: column;
  }

  > div span:nth-of-type(1) {
    font-size: 20px;
    font-weight: bolder;
    margin-bottom: 10px;
  }

  > div span:nth-of-type(2) {
    font-size: 14px;
    font-weight: lighter;
  }
`;

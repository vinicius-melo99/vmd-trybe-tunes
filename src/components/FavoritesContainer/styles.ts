import styled from 'styled-components';

export const Favorites = styled.div`
  display: flex;
  width: 100%;
  height: 75vh;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding: 50px 2%;
  color: white;
  vertical-align: middle;

  > div {
    /* background-color: red; */
    width: 50%;
  }

  > div p {
    margin-bottom: 5px;
  }

  > div audio {
    width: 80%;
    margin-bottom: 10px;
    vertical-align: middle;
  }
`;

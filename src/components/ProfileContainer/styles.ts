import styled from 'styled-components';

export const Profile = styled.section`
  display: flex;
  width: 100%;
  height: 75vh;
  overflow-y: auto;
  color: white;
`;

export const ProfilePicture = styled.div`
  width: 240px;
  height: 100%;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 240px;
  }
`;

export const ProfileInformation = styled.div`
  flex-grow: 2;
  height: 100%;
  padding: 40px 40px;

  div {
    margin-bottom: 25px;
  }

  div p {
    font-weight: bolder;
    font-size: 19px;
  }

  div span {
    font-weight: lighter;
    font-size: 15px;
  }
`;

import styled from 'styled-components';

export const Profile = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75vh;
  overflow-y: auto;
  color: white;
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  width: 240px;
  height: 100%;

  img {
    width: 190px;
    height: 190px;
    border-radius: 50%;
  }
`;

export const ProfileInformation = styled.div`
  flex-grow: 2;
  height: 100%;
  padding: 40px 40px;

  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #4ad5e2;
    font-size: 18px;
    margin-top: 5px;
    padding: 5px;
    color: white;
    outline: none;
    width: 300px;
  }

  textarea {
    background-color: transparent;
    border: 1px solid #4ad5e2;
    font-size: 16px;
    margin-top: 5px;
    padding: 10px;
    color: white;
    outline: none;
    width: 450px;
    height: 90px;
    border-radius: 10px;
    margin-right: 10px;
    resize: none;
  }

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

  div button {
    background-color: #205fe5;
    color: white;
    font-size: 16px;
    padding: 5px 10px;
    border: none;
    outline: none;
    margin-bottom: 5px;
    border-radius: 23px;
    font-weight: bolder;
    cursor: pointer;

    &:hover {
      background-color: rgb(15, 65, 172);
    }
  }
`;

export const DescriptionBox = styled.div`
  width: 450px;
  height: 120px;
  padding: 4px 0px;
  font-weight: lighter;
  font-size: 15px;
  overflow-y: auto;
`;

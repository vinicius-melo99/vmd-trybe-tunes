import styled from 'styled-components';
import logo from '../../assets/logo.svg';

export const LoginPage = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2%;
  background-color: #1a1a1a;
  color: #dadada;
`;

export const LoginContainer = styled.div`
  width: 750px;
  height: 450px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: #4444;
  border-radius: 20px;
`;

export const Logo = styled.div`
  background-image: url(${logo});
  width: 187.19px;
  height: 104.89px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input,
  button {
    width: 50%;
    height: 40px;
    border-radius: 100px;
    outline: none;
    color: #fff;
    font-size: 14px;
  }

  input {
    padding: 10px;
    border: solid 1px #003be5;
    background-color: transparent;
  }

  input::placeholder {
    color: white;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    background-color: #003be5;
    border: none;
    text-transform: uppercase;
    font-weight: bolder;
    cursor: pointer;
    transition: 300ms;
  }

  button:not(:disabled):hover {
    background-color: #002ba5;
  }

  button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

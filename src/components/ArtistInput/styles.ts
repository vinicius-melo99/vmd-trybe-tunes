import styled from 'styled-components';
// import React from 'react';

export const InputForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;

  input {
    width: 523px;
    padding: 10px 15px;
    margin-right: 20px;
    font-size: 18px;
    border-radius: 23px;
    border: none;
    outline: none;
    background-color: transparent;
    border: solid 1px #205fe5;
    color: white;
  }

  button {
    background-color: #00d5e2;
    color: white;
    text-transform: uppercase;
    font-size: 14px;
    padding: 0px 10px;
    border: none;
    outline: none;
    border-radius: 23px;
    font-weight: bolder;
    cursor: pointer;
  }

  button:hover {
    background-color: rgb(0, 173, 182);
  }
`;

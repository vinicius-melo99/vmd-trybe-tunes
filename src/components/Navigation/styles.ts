import { styled } from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px 20px 20px 40px;
    color: rgb(148, 148, 148);
    text-decoration: none;
    gap: 20px;
    border-radius: 20px;
    transition: 350ms;
  }

  a img {
    width: 22px;
    height: 22px;
  }

  a:hover {
    background-color: #4ad5e2;
    color: #1a1a1a;
  }
`;

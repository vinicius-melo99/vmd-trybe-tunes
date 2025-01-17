import { useEffect } from 'react';
import { SideMenuProps } from '../../types';
import MenuBox from '../MenuBox/MenuBox';
import { MenuContainer } from './styles';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const SideMenu = ({ username }: SideMenuProps) => {
  useEffect(() => {
    console.log(username);
  }, [username]);

  return (
    <MenuContainer>
      <MenuBox>
        <Logo />
      </MenuBox>
      <MenuBox>
        <Navigation />
      </MenuBox>
      <MenuBox>test</MenuBox>
    </MenuContainer>
  );
};

export default SideMenu;

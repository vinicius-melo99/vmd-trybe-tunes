import MenuBox from '../MenuBox/MenuBox';
import { MenuContainer } from './styles';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../funcs';
import UserBox from '../UserBox/UserBox';

const SideMenu = () => {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    getUser()
      .then((userInformation) => setUsername(userInformation.username))
      .catch(() => navigate('/'))
      .finally(() => setIsLoading(false));
  }, [navigate]);

  return (
    <MenuContainer>
      <MenuBox>
        <Logo />
      </MenuBox>
      <MenuBox>
        <Navigation />
      </MenuBox>
      <MenuBox>
        <UserBox username={username} isLoading={isLoading} />
      </MenuBox>
    </MenuContainer>
  );
};

export default SideMenu;

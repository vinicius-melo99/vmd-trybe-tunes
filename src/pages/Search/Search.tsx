import { useEffect, useState } from 'react';
import { PageContainer } from './styles';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../../components/SideMenu/SideMenu';

const Search = () => {
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('userInformation');

    if (!data) navigate('/');
    else {
      const { username: name } = JSON.parse(data);
      setUsername(name);
    }
  }, [navigate]);

  return (
    <PageContainer>
      <SideMenu username={username} />
    </PageContainer>
  );
};

export default Search;

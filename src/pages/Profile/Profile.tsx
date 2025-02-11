import { useLocation, Location } from 'react-router-dom';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import PageHeader from '../../components/PageHeader/PageHeader';
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer';
import SideMenu from '../../components/SideMenu/SideMenu';
import { PageContainer } from '../Search/styles';
import ProfileEdit from '../ProfileEdit/ProfileEdit';
import { useEffect, useState } from 'react';

const Profile = () => {
  const { pathname }: Location = useLocation();
  const [endpoint, setEndpoint] = useState<string>('');

  useEffect(() => {
    const editedEndpoint = [...pathname.split('')];
    const removedChar = editedEndpoint.pop();
    if (removedChar === '/') {
      return setEndpoint(editedEndpoint.join(''));
    }

    setEndpoint(pathname);
  }, [pathname]);

  return (
    <PageContainer>
      <SideMenu />
      <ContentContainer>
        <PageHeader>
          <h2>Informações de Perfil</h2>
        </PageHeader>
        {endpoint === '/profile/edit' ? <ProfileEdit /> : <ProfileContainer />}
      </ContentContainer>
    </PageContainer>
  );
};

export default Profile;

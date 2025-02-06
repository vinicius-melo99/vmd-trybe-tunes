import ContentContainer from '../../components/ContentContainer/ContentContainer';
import PageHeader from '../../components/PageHeader/PageHeader';
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer';
import SideMenu from '../../components/SideMenu/SideMenu';
import { PageContainer } from '../Search/styles';

const Profile = () => {
  return (
    <PageContainer>
      <SideMenu />
      <ContentContainer>
        <PageHeader>
          <h2>Informações de Perfil</h2>
        </PageHeader>
        <ProfileContainer />
      </ContentContainer>
    </PageContainer>
  );
};

export default Profile;

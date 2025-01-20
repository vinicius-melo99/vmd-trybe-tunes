import ContentContainer from '../../components/ContentContainer/ContentContainer';
import PageHeader from '../../components/PageHeader/PageHeader';
import SideMenu from '../../components/SideMenu/SideMenu';
import { PageContainer } from '../Search/styles';

const Profile = () => {
  return (
    <PageContainer>
      <SideMenu />
      <ContentContainer>
        <PageHeader />
      </ContentContainer>
    </PageContainer>
  );
};

export default Profile;

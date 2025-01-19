import ContentContainer from '../../components/ContentContainer/ContentContainer';
import SideMenu from '../../components/SideMenu/SideMenu';
import { PageContainer } from '../Search/styles';

const Profile = () => {
  return (
    <PageContainer>
      <SideMenu />
      <ContentContainer />
    </PageContainer>
  );
};

export default Profile;

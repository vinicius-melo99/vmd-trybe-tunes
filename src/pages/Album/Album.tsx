import ContentContainer from '../../components/ContentContainer/ContentContainer';
import PageHeader from '../../components/PageHeader/PageHeader';
import SideMenu from '../../components/SideMenu/SideMenu';
import { PageContainer } from '../Search/styles';

const Album = () => {
  return (
    <PageContainer>
      <SideMenu />
      <ContentContainer>
        <PageHeader>Album</PageHeader>
      </ContentContainer>
    </PageContainer>
  );
};

export default Album;

import ContentContainer from '../../components/ContentContainer/ContentContainer';
import PageHeader from '../../components/PageHeader/PageHeader';
import SideMenu from '../../components/SideMenu/SideMenu';
import { PageContainer } from '../Search/styles';

const Favorites = () => {
  return (
    <PageContainer>
      <SideMenu />
      <ContentContainer>
        <PageHeader>
          <h2>Músicas ⭐ Favoritas</h2>
        </PageHeader>
      </ContentContainer>
    </PageContainer>
  );
};

export default Favorites;

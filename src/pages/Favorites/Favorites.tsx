import ContentContainer from '../../components/ContentContainer/ContentContainer';
import FavoritesContainer from '../../components/FavoritesContainer/FavoritesContainer';
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
        <FavoritesContainer />
      </ContentContainer>
    </PageContainer>
  );
};

export default Favorites;

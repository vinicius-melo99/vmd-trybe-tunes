import { PageContainer } from './styles';
import SideMenu from '../../components/SideMenu/SideMenu';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import PageHeader from '../../components/PageHeader/PageHeader';
import ArtistInput from '../../components/ArtistInput/ArtistInput';

const Search = () => {
  return (
    <PageContainer>
      <SideMenu />
      <ContentContainer>
        <PageHeader>
          <ArtistInput />
        </PageHeader>
      </ContentContainer>
    </PageContainer>
  );
};

export default Search;

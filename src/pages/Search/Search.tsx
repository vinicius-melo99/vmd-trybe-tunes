import { PageContainer } from './styles';
import SideMenu from '../../components/SideMenu/SideMenu';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import PageHeader from '../../components/PageHeader/PageHeader';
import ArtistInput from '../../components/ArtistInput/ArtistInput';
import { useState } from 'react';
import { AlbumType } from '../../types';
import AlbumsContainer from '../../components/AlbumsContainer/AlbumsContainer';

const Search = () => {
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAlbums = (albums: AlbumType[]) => {
    setAlbums(albums);
  };

  const toggleLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  return (
    <PageContainer>
      <SideMenu />
      <ContentContainer>
        <PageHeader>
          <ArtistInput getAlbums={getAlbums} toggleLoading={toggleLoading} />
        </PageHeader>
        <AlbumsContainer albums={albums} isLoading={isLoading} />
      </ContentContainer>
    </PageContainer>
  );
};

export default Search;
